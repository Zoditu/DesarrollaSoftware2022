function CursorSobre(elemento) {
    console.log('Encima del elemento: ' + elemento);
} 
/*

const admin = {
    user: "admin",
    pass: "password"
};

const moderator = {
    user: "mod",
    pass: "password"
};

function Login() {
    var username = document.getElementById('username');
    var password = document.getElementById('password');
    var isAdmin = false;

    //Si el username y password son correctos
    //Mostrar "LOGIN!"
    //Si no, mostrar "No tienes permisos :("

    /**
     * Sentencias selectivas:
     *      if-else
     *      switch
     *      Operador Ternario
     */
    //Sintaxis if(boolean) { //scope }
    //Puede recibir cálculos de operaciones condicionales y/o lógicas

    /*
    if(admin.user === username.value && admin.pass === password.value) {
        //Alcance de este if (local) peeeero no pueden duplicar variables como en la funciones
        isAdmin = true;
        alert('TIENES TODOS LOS PERMISOS!');
    } else if(moderator.user === username.value && moderator.pass === password.value) {
        alert('SOLO ERES MODERADOR!');
    } else {
        alert('USUARIO NO EXISTE!');
    }

    //Los if se pueden anidar a sí mismos:
    /**
     * if(boolean) {
     * } else if(boolean) {
     * } else if(boolean) {} ....
     * else {
     * }
     */

/*
    //De hecho, el else puede ser opcional
    var adminPanel = document.getElementById("admin-panel");
    if(isAdmin) {
        adminPanel.style.display = "block";
        console.log('Como administrador, solo tú puedes leer esto :)');
    } else {
        adminPanel.style.display = "none";
    }

    //console.log(`Usuario: ${ username.value } - Password: ${ password.value }`);


//console.log(auth);*/