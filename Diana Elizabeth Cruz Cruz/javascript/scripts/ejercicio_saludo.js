function ModificarSaludo(){
    //Extraer el saludo
    var nombre = document.getElementById("saludo");
    //nombre.value representa el texto de la caja. 
    var personasASaludar = nombre.value;

    //Extraer el color
    var color = document.getElementById("colorSaludo");
    //color.value me da el hexadecimal del color a la propiedad background o color de css se le puede asignar un hexadecimal.
    var colorSaludo = color.value; //#Hexcolor

    var reemplazarNombre = document.getElementById("nombre");
    reemplazarNombre.innerHTML = personasASaludar;
    reemplazarNombre.innerHTML.style.color = colorSaludo;
} 