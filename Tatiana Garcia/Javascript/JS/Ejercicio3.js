function CambiarSaludo () {
    var nombre = document.getElementById("saludo");
    var personaASaludar = nombre.value;
    var color = document.getElementById("ColorSaludo");
    var colorSaludo = color.value;
    var remplazarNombre = document.getElementById("nombre");
    remplazarNombre.innerHTML = personaASaludar;
    remplazarNombre.style.color = colorSaludo;
}