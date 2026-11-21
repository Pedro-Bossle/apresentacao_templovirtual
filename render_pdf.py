"""Gera o PDF de cada apresentação (demolay.pdf, filhas-de-jo.pdf, ...) a partir dos HTMLs.

Uso:  python3 render_pdf.py            # todas
      python3 render_pdf.py lojas      # só uma (nome do HTML sem extensão)

Precisa do Playwright com Chromium:  pip install playwright && python3 -m playwright install chromium
Rode depois do build.py. O botão "Baixar em PDF" da plateia aponta para estes arquivos.
"""
import functools, http.server, os, sys, threading
from playwright.sync_api import sync_playwright

D = os.path.dirname(os.path.abspath(__file__))
DECKS = sys.argv[1:] or ['demolay', 'filhas-de-jo', 'lojas', 'estrela-do-oriente', 'escola-de-iniciaticos']
CHROME = os.environ.get('CHROME_PATH')  # opcional: usar um Chrome já instalado

def shrink(path):
    """O Chrome grava as fotos sem perda (PNG/Flate). Se o pikepdf estiver instalado,
    regrava as fotos grandes em JPEG para o PDF ficar leve no celular da plateia."""
    try:
        import io, pikepdf
        from pikepdf import PdfImage, Name
    except ImportError:
        return
    pdf = pikepdf.open(path, allow_overwriting_input=True)
    done = set()
    for page in pdf.pages:
        for _, raw in page.get_images().items():
            og = raw.objgen
            if og in done or raw.get('/Filter') != Name.FlateDecode or int(raw.get('/BitsPerComponent', 8)) != 8:
                continue
            done.add(og)
            if len(raw.read_raw_bytes()) < 40_000:
                continue
            try:
                im = PdfImage(raw).as_pil_image()
            except Exception:
                continue
            if im.mode == 'RGBA':  # a transparência fica na /SMask, que continua no PDF
                im = im.convert('RGB')
            if im.mode not in ('RGB', 'L'):
                continue
            buf = io.BytesIO(); im.save(buf, 'JPEG', quality=82, optimize=True)
            if buf.tell() < len(raw.read_raw_bytes()):
                raw.write(buf.getvalue(), filter=Name.DCTDecode)
                raw.ColorSpace = Name.DeviceRGB if im.mode == 'RGB' else Name.DeviceGray
                if '/DecodeParms' in raw: del raw['/DecodeParms']
    pdf.save(path, compress_streams=True, object_stream_mode=pikepdf.ObjectStreamMode.generate)

class Quiet(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *a):
        pass

handler = functools.partial(Quiet, directory=D)
srv = http.server.ThreadingHTTPServer(('127.0.0.1', 0), handler)
threading.Thread(target=srv.serve_forever, daemon=True).start()
port = srv.server_address[1]

with sync_playwright() as p:
    kw = {'executable_path': CHROME, 'args': ['--no-sandbox']} if CHROME else {}
    b = p.chromium.launch(**kw)
    for name in DECKS:
        pg = b.new_page(viewport={'width': 1600, 'height': 900})
        pg.goto(f'http://127.0.0.1:{port}/{name}.html?v=pdf', wait_until='networkidle')
        pg.wait_for_selector('body[data-ready="1"]', timeout=20000)
        pg.emulate_media(media='print')
        out = os.path.join(D, name + '.pdf')
        pg.pdf(path=out, width='1600px', height='900px', print_background=True,
               prefer_css_page_size=True, margin={'top': '0', 'right': '0', 'bottom': '0', 'left': '0'})
        shrink(out)
        print(f'{name}.pdf  {os.path.getsize(out) // 1024} KB')
        pg.close()
    b.close()
srv.shutdown()
