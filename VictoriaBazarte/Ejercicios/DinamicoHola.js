function ModificarSaludo(){
var nombre = document.getElementById("saludo");
var personaASaludar = nombre.value;
//var color = document.getElementById("color");
var color = document.getElementById("colorSaludo");
var colorSaludo = color.value;

var reemplazarNombre = document.getElementById("nombre");
reemplazarNombre.innerHTML = personaASaludar;
reemplazarNombre.style.color = colorSaludo;

}
