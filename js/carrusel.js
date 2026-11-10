(function(){
var slides=[].slice.call(document.querySelectorAll('.slide')),dots=document.getElementById('dots'),i=0;
slides.forEach(function(_,n){var b=document.createElement('button');b.type='button';b.setAttribute('aria-label','Ir a la diapositiva '+(n+1));b.onclick=function(){go(n)};dots.appendChild(b)});
function go(n){i=(n+slides.length)%slides.length;slides.forEach(function(s,k){s.classList.toggle('active',k===i)});[].forEach.call(dots.children,function(d,k){d.setAttribute('aria-current',k===i)})}
document.getElementById('prev').onclick=function(){go(i-1)};
document.getElementById('next').onclick=function(){go(i+1)};
go(0);
var tr=document.querySelector('.track'),x0=null,y0=null;
tr.addEventListener('touchstart',function(e){x0=e.touches[0].clientX;y0=e.touches[0].clientY},{passive:true});
tr.addEventListener('touchend',function(e){if(x0===null)return;var dx=e.changedTouches[0].clientX-x0,dy=e.changedTouches[0].clientY-y0;x0=null;if(Math.abs(dx)>50&&Math.abs(dx)>Math.abs(dy)*1.5)go(dx<0?i+1:i-1)},{passive:true});
})();
