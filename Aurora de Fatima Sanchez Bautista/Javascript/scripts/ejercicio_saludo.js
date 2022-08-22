function ModificarSaludo() {
    //Extraer 
    var nombre = document.getElementById("saludo");
    //nombre.value representa el texto de la caja
    var personaASaludar = nombre.value;

    //Extraer color
    var color = document.getElementById("colorSaludo");
    //color.value me da el hexadecimal del color
    //a la propiedad background o color de css
    //se le puede asignar un hexadecimal
    var colorSaludo = color.value; //#hexcolor

    var reemplazarNombre = document.getElementById("nombre");
    reemplazarNombre.innerHTML = personaASaludar;
    reemplazarNombre.style.color = colorSaludo;

}