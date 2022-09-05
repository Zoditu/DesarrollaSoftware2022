function ModificarSaludo() {
    //Extraer el saludo
    //para extraer un elemento hay que asignar una variable (nombre), poner document.getElementbyId ( id del input del texto)

    //get element= se trae todo el elemento obtener el elemento (osea toda la linea de html)

    var nombre = document.getElementById("saludo");
//nombre.value = representa el nombre del elemnto. tambien se puede meter dentro de una variable: ejemplo 

    var personaASaludar =  nombre.value;

    //extraer el color: 1.declarar variable, 2. getElementById(id de la etiqueta de html entre comillas") y se cierra con punto y coma.
    var color = document.getElementById("colorSaludo"); 

    //colo.value me da el hexadecimal del color
    //a la propiedad background o color de css se le puede asignar un hexadecimal

    var colorSaludo=color.value //esto me guarda el hexadecimal del color 

    var reemplazarNombre=document.getElementById("nombre");
    reemplazarNombre.innerHTML=personaASaludar;

    reemplazarNombre.style.color=colorSaludo;
}