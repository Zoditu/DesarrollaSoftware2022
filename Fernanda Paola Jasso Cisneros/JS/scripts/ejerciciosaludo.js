function saludos(){
    var nombre = document.getElementById("saludos");
    var nombreNuevo = nombre.value;

    var color = document.getElementById("colorSaludo");
    var colorNuevo = color.value; //guarda el valor del color

    var nombreReemplazo = document.getElementById("nombres");
    nombreReemplazo.innerHTML = nombreNuevo;
    nombreReemplazo.style.color = colorNuevo;
    
}

function escribirHola(){
    if(hidden=true){
        hidden=false;
    }
    console.log("Hola")
}