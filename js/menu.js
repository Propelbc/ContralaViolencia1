(function(){
var btn=document.querySelector('.burger'),nav=document.getElementById('menu');
function toggle(o){nav.classList.toggle('open',o);btn.setAttribute('aria-expanded',o);btn.setAttribute('aria-label',o?'Cerrar menú':'Abrir menú')}
btn.onclick=function(){toggle(!nav.classList.contains('open'))};
nav.addEventListener('click',function(e){if(e.target.tagName==='A')toggle(false)});
})();
