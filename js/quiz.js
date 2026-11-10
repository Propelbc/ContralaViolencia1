(function(){
var Q=[["Un compañero comparte un meme con tu foto para burlarse de ti.",1,"Es ciberacoso. Aunque sea “un meme”, humilla y daña."],
["Tu pareja te pide la contraseña de tu celular “para confiar”.",1,"Es control. La confianza no se prueba vigilando."],
["Dos amigos juegan a empujarse, los dos se ríen y quieren seguir.",0,"Es un juego entre iguales. Pero si alguien dice “basta”, se detiene de inmediato."],
["Sacan a una compañera del grupo de WhatsApp a propósito para que nadie le hable.",1,"Es exclusión, una forma de violencia psicológica."],
["Un compañero no está de acuerdo contigo y te lo dice con respeto.",0,"Un desacuerdo respetuoso no es violencia. Es parte de convivir."]];
var qi=0,qs=0,qt=document.getElementById('qt'),qn=document.getElementById('qn'),qf=document.getElementById('qf'),qb=document.getElementById('qb'),qx=document.getElementById('qnext');
function qshow(){qb.style.display='';qx.hidden=true;qf.textContent='';
if(qi>=Q.length){qb.style.display='none';qn.textContent='Terminaste';qt.textContent='Acertaste '+qs+' de '+Q.length+'.';qf.textContent=qs>=4?'¡Muy bien! Ya sabes reconocer la violencia.':'Repasa las secciones Tipos y Prevención y vuelve a intentarlo.';qx.textContent='Jugar otra vez';qx.hidden=false;qi=-1;return}
qn.textContent='Situación '+(qi+1)+' de '+Q.length;qt.textContent=Q[qi][0];qx.textContent='Siguiente'}
qb.addEventListener('click',function(e){var b=e.target.closest('button');if(!b||qx.hidden===false)return;var ok=+b.dataset.a===Q[qi][1];if(ok)qs++;
b.className=ok?'good':'bad';qf.textContent=(ok?'Correcto. ':'No exactamente. ')+Q[qi][2];qx.hidden=false;
[].forEach.call(qb.children,function(x){x.disabled=true});});
qx.addEventListener('click',function(){[].forEach.call(qb.children,function(x){x.disabled=false;x.className=''});if(qi===-1){qi=0;qs=0}else qi++;qshow()});
qshow();
})();
