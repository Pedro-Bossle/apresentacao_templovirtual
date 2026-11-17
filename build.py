import base64, os, sys

D = os.path.dirname(os.path.abspath(__file__))
FILES = {'odm': 'demolay.html', 'fdj': 'filhas-de-jo.html', 'loja': 'lojas.html', 'oes': 'estrela-do-oriente.html'}
sb_url = os.environ.get('SB_URL', '')
sb_key = os.environ.get('SB_KEY', '')

def rd(p):
    with open(os.path.join(D, p), encoding='utf-8') as f:
        return f.read()

def uri(p, mime):
    with open(os.path.join(D, p), 'rb') as f:
        return f'data:{mime};base64,' + base64.b64encode(f.read()).decode()

def safe_js(s):
    return s.replace('</script', '<\\/script')

def build(org, out):
    html = rd('src/template.html')
    slides = rd('src/common.js') + '\n' + rd(f'src/orgs/{org}.js')
    imgs = {'logo': uri('src/img/logo.svg', 'image/svg+xml')}
    for n in ['overview', 'secretaria', 'tesouraria', 'gestao', 'comissoes', 'odm', 'fdj', 'loja']:
        imgs[n] = uri(f'src/img/{n}.webp', 'image/webp')

    html = html.replace('@@LIB_QR@@', safe_js(rd('src/vendor/qrcode.js')))
    html = html.replace('@@LIB_SB@@', safe_js(rd('src/vendor/supabase.js')))
    img_js = 'const IMG = {' + ','.join(f'{k}:"{v}"' for k, v in imgs.items()) + '};\n'
    html = html.replace('@@SLIDES@@', safe_js(img_js + slides))
    for k, v in imgs.items():
        html = html.replace(f'@@IMG_{k}@@', v)
    THEMES = {
     'odm': ('', '#070d1a', 'Templo Virtual · Apresentação DeMolay'),
     'fdj': ('''
      --bg:#faf8fd; --bg2:#ffffff; --card:#ffffff; --line:rgba(91,42,134,.14); --line2:rgba(91,42,134,.26);
      --tx:#2a1840; --tx2:#4d3f60; --mut:#80739a; --gold:#5b2a86; --gold2:#d4af37; --violet:#5b2a86; --ok:#1f8a55; --bad:#c0392b; --warn:#b7791f;
      --inset:#f3eef9; --on-acc:#ffffff; --btn:#efe8f7; --chip:rgba(255,255,255,.9); --acc-soft:rgba(91,42,134,.10); --deco1:#d4af37; --deco2:#8a5cc0; --mock-shadow:rgba(91,42,134,.18);
      --stage-bg:radial-gradient(1100px 650px at 90% 115%,rgba(91,42,134,.14),transparent 60%),radial-gradient(800px 500px at 0% -10%,rgba(212,175,55,.10),transparent 60%),#ffffff;
    ''', '#ffffff', 'Templo Virtual · Apresentação Filhas de Jó'),
     'loja': ('''
      --bg:#f5f2ea; --bg2:#fbf9f4; --card:#fffdf8; --line:rgba(7,45,90,.14); --line2:rgba(7,45,90,.26);
      --tx:#0b2240; --tx2:#34475f; --mut:#6b7a8f; --gold:#072d5a; --gold2:#cd991f; --violet:#072d5a; --ok:#1f7a4d; --bad:#b03a2e; --warn:#a86b12;
      --em:#a87a12; --inset:#efe9dc; --on-acc:#ffffff; --btn:#ebe4d4; --chip:rgba(251,249,244,.92); --acc-soft:rgba(7,45,90,.08); --deco1:#cd991f; --deco2:#072d5a; --mock-shadow:rgba(7,45,90,.18);
      --stage-bg:radial-gradient(1100px 650px at 90% 115%,rgba(7,45,90,.12),transparent 60%),radial-gradient(800px 500px at 0% -10%,rgba(205,153,31,.12),transparent 60%),#f7f4ec;
    ''', '#f5f2ea', 'Templo Virtual · Apresentação para Lojas'),
     'oes': ('''
      --bg:#0e0b1c; --bg2:#151029; --card:#1a1430; --line:rgba(240,232,255,.12); --line2:rgba(240,232,255,.22);
      --tx:#f3effa; --tx2:#cfc8e0; --mut:#9b93b3; --gold:#f2c230; --gold2:#d9a521; --violet:#9c8cff; --ok:#3aa864;
      --inset:#120e24; --on-acc:#1a1200; --btn:#221a3b; --chip:rgba(14,11,28,.85); --acc-soft:rgba(242,194,48,.14); --deco1:#3b6fd8; --deco2:#d8413a;
      --stage-bg:radial-gradient(1100px 650px at 88% 115%,rgba(59,111,216,.30),transparent 60%),radial-gradient(800px 520px at 0% -10%,rgba(216,65,58,.14),transparent 60%),radial-gradient(700px 400px at 50% 130%,rgba(58,168,100,.12),transparent 60%),#0e0b1c;
    ''', '#0e0b1c', 'Templo Virtual · Apresentação Estrela do Oriente'),
    }
    css, tc, title = THEMES[org]
    html = html.replace('@@THEME_CSS@@', (':root{' + css + '}') if css else '').replace('@@THEME_COLOR@@', tc).replace('@@TITLE@@', title)
    html = html.replace('@@SB_URL@@', sb_url).replace('@@SB_KEY@@', sb_key)
    left = [t for t in ['@@IMG_', '@@LIB_', '@@SLIDES@@'] if t in html]
    assert not left, left
    with open(out, 'w', encoding='utf-8') as f:
        f.write(html)
    print(out, len(html) // 1024, 'KB')

orgs = sys.argv[1:] or list(FILES)
for o in orgs:
    build(o, os.path.join(D, FILES[o]))
