c = open('for_trae/index.html', encoding='utf-8').read()

# Check critical structure 
checks = [
    ('main-layer open', '<div class="main-layer" id="main-layer">'),
    ('main-layer close', '</div><!-- /main-layer -->'),
    ('page-container open', '<div class="page-container" id="page-container">'),
    ('page-container close', '</div><!-- /page-container -->'),
    ('footer-layer open', '<div class="footer-layer">'),
    ('hero section', '<section class="sec-hero"'),
    ('hero close', '</section>'),
]

for name, s in checks:
    count = c.count(s)
    print(f'{name}: {count} occurrences')

# Check around page-container
pc = c.find('page-container')
print(f'\nAround page-container ({pc}):')
print(repr(c[pc:pc+300]))

# Check around main-layer
ml = c.find('main-layer')
print(f'\nAround main-layer ({ml}):')
print(repr(c[max(0,ml-50):ml+200]))

# Check the end of file
print(f'\nLast 200 chars:')
print(repr(c[-200:]))
