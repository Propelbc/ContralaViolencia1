(function(){
var V=[["Bromas que hieren",0,"No es inocente: ya duele. Pide que paren."],["Ignorar a propósito",0,"La ley del hielo también lastima."],["Chantajear",0,"Usar el miedo o la culpa para controlar no es cariño."],
["Humillar en público",1,"Reacciona: habla con un adulto de confianza."],["Controlar con quién hablas",1,"Controlar tus amistades o tu celular es violencia."],["Amenazar",1,"Una amenaza es violencia. Cuéntalo a alguien que pueda ayudarte."],
["Empujar o golpear “jugando”",2,"Ya es violencia física. Busca ayuda."],["Golpear o forzar contacto sexual",2,"Es un delito. Pide ayuda hoy."],["Amenazas graves de daño",2,"Si estás en peligro, llama al 911 ahora."]];
var vr=document.getElementById('vr'),vz=document.getElementById('vz'),vt=document.getElementById('vt'),vm=document.getElementById('vm'),zn=['Ten cuidado. ','Reacciona. ','Pide ayuda ya. '];
function vup(){var v=V[+vr.value];vz.className='zone z'+v[1];vt.textContent=v[0];vm.textContent=zn[v[1]]+v[2]}
vr.addEventListener('input',vup);vup();
})();
