(function(){
var intro=document.getElementById('intro');
if(intro&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
var src=document.querySelectorAll('.logos img'),tg=intro.querySelectorAll('img.lg'),rb=intro.querySelector('.ribbon');
for(var k=0;k<3;k++)tg[k].src=src[k].src;
intro.classList.add('on');
var end=function(){intro.style.display='none'};
intro.addEventListener('click',end);
setTimeout(function(){var c=rb.getBoundingClientRect(),cx=c.left+c.width/2,cy=c.top+c.height/2;
for(var k=0;k<3;k++){var r=tg[k].getBoundingClientRect();tg[k].style.setProperty('--dx',(cx-(r.left+r.width/2))+'px');tg[k].style.setProperty('--dy',(cy-(r.top+r.height/2))+'px')}
intro.classList.add('merge')},3700);
setTimeout(function(){intro.classList.add('out')},7600);
setTimeout(end,8400);
}
})();
