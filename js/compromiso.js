(function(){
function wrap(c,t,x,y,w,lh){var ws=t.split(' '),l='';ws.forEach(function(a){var tt=l?l+' '+a:a;if(c.measureText(tt).width>w&&l){c.fillText(l,x,y);y+=lh;l=a}else l=tt});c.fillText(l,x,y);return y}
document.getElementById('pb').addEventListener('click',function(){
var cv=document.createElement('canvas');cv.width=1080;cv.height=1350;var c=cv.getContext('2d');
var g=c.createLinearGradient(0,0,1080,1350);g.addColorStop(0,'#5B3FD1');g.addColorStop(1,'#2B2160');c.fillStyle=g;c.fillRect(0,0,1080,1350);
c.fillStyle='#fff';c.fillRect(60,60,960,1230);
var im=new Image();im.onload=function(){var h=420,w=im.width*h/im.height;c.drawImage(im,540-w/2,110,w,h);
c.textAlign='center';c.fillStyle='#4B2A99';c.font='800 58px "Bricolage Grotesque",Arial,sans-serif';c.fillText('Mi compromiso',540,640);
c.fillStyle='#1E1B2E';c.font='600 52px "Bricolage Grotesque",Arial,sans-serif';var e=wrap(c,'“'+document.getElementById('ps').value+'”',540,740,780,70);
var n=document.getElementById('pn').value.trim();if(n){c.font='700 46px "Bricolage Grotesque",Arial,sans-serif';c.fillStyle='#5B3FD1';c.fillText('— '+n,540,e+110)}
c.fillStyle='#5A5670';c.font='500 34px "Bricolage Grotesque",Arial,sans-serif';c.fillText('Unidos contra la violencia',540,1200);
var o=document.getElementById('card');o.src=cv.toDataURL('image/png');o.style.display='block'};
im.src=window.LAZO_DATA});
})();
