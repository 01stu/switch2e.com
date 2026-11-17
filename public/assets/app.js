const $ = (s, parent = document) => parent.querySelector(s);
const $$ = (s, parent = document) => [...parent.querySelectorAll(s)];
const langButton = $('.language-trigger');
const langMenu = $('#language-menu');
const localePrompt = $('[data-locale-prompt]');
if (localePrompt && document.documentElement.lang === 'en' && location.pathname === '/') {
  const prefersChinese = [navigator.language, ...(navigator.languages || [])]
    .some(language => /^zh(?:-|$)/i.test(language));
  let dismissed = false;
  try { dismissed = localStorage.getItem('switch2e-locale-prompt-dismissed') === '1'; } catch {}
  if (prefersChinese && !dismissed) localePrompt.hidden = false;
  $('[data-dismiss-locale-prompt]')?.addEventListener('click', () => {
    localePrompt.hidden = true;
    try { localStorage.setItem('switch2e-locale-prompt-dismissed', '1'); } catch {}
  });
}
function closeLanguages() { langMenu.hidden = true; langButton.setAttribute('aria-expanded', 'false'); }
langButton?.addEventListener('click', () => { langMenu.hidden = !langMenu.hidden; langButton.setAttribute('aria-expanded', String(!langMenu.hidden)); });
document.addEventListener('click', e => { if (!e.target.closest('.language-picker')) closeLanguages(); });
const menuButton = $('.menu-toggle');
menuButton?.addEventListener('click', () => { const open = $('#main-nav').classList.toggle('open'); menuButton.setAttribute('aria-expanded', String(open)); });
document.addEventListener('keydown', e => { if(e.key === 'Escape') { closeLanguages(); $('#main-nav')?.classList.remove('open'); menuButton?.setAttribute('aria-expanded', 'false'); } });
for (const directory of $$('[data-directory]')) {
  const filters = $$('[data-filter], [data-genre-filter]', directory);
  function filter(button) {
    const value = button.dataset.filter || button.dataset.genreFilter;
    for (const b of filters) { const active=b===button; b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active)); }
    let count=0;
    for (const item of $$('[data-item]', directory)) {
      item.hidden = !(value==='all'||(button.dataset.filter ? item.dataset.platforms.split(',').includes(value) : item.dataset.genre===value));
      if(!item.hidden)count++;
    }
    const counter=$('.result-count',directory);
    if(counter)counter.textContent=`${count} ${document.documentElement.lang==='en'?'projects':document.documentElement.lang==='ja'?'件のプロジェクト':'个项目'}`;
    $('.empty-state',directory).hidden=count!==0;
  }
  filters.forEach(button=>button.addEventListener('click',()=>filter(button)));
  $('[data-reset]',directory)?.addEventListener('click',()=>filter(filters[0]));
}
const dialog=$('.search-dialog'), input=$('#global-search');
const entries=JSON.parse($('#search-data')?.textContent||'[]');
const normalize=s=>s.normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[’']/g,'');
function renderResults(){
  const term=normalize(input.value.trim());
  const matches=entries.filter(item=>normalize(`${item.text} ${item.sub}`).includes(term));
  const fragment=document.createDocumentFragment();
  for(const item of matches){
    const a=document.createElement('a');a.className='search-result';a.href=item.url;
    const div=document.createElement('div'),strong=document.createElement('strong'),small=document.createElement('small'),type=document.createElement('span');
    strong.textContent=item.name;small.textContent=item.sub;type.textContent=`${item.type} ↗`;
    div.append(strong,small);a.append(div,type);fragment.append(a);
  }
  $('.search-results').replaceChildren(fragment);
  $('.search-no-results').hidden=matches.length!==0;
}
function openSearch(){if(dialog.open)return;dialog.showModal();input.value='';renderResults();input.focus();}
$$('[data-open-search]').forEach(b=>b.addEventListener('click',openSearch));
input?.addEventListener('input',renderResults);
document.addEventListener('keydown',e=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();openSearch();}});
dialog?.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
