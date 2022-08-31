/*function CursorSobre (elemento){
    console.log('Encima del elemento:' + elemento);

}*/

const admin={
user:"admin",
pass:"password"
  
};

const moderator ={
    user: "mod",
    pass:"password"
};

function Login(){
    var username= document.getElementById('username');
    var password=document.getElementById('password');
    var isAdmin=false;


    //si el user name y password son correctos
    //mostrar "LOG IN!"
    //Si no, mostrar "No tienes permisos :("

    /*
    *Sentencias selectivas:
    *............if-else
    *............switch
    *............Operador Ternario
    */
   //Sintaxis if(boolean) {//scope}
   // puede recibir calculos de operaciones condicionales y/o logicas

   if(admin.user=== username.value && admin.pass === password.value) {
    //alcance de este if (local) pero no pueden duplicar variables como las funciones 
    isAdmin = true;
    alert('Tienes todos los permisos!');
   }else if(moderator.user===username.value && moderator.pass === password.value){
    alert('solo eres moderador!');
   }else{
    alert('Usuario no existe');
   }

   //Los if se pueden anidar a si mismos:
   /**
    * if (boolean) {
    * } else if (boolean){
    * }else if (boolean) {}...
    * else {
    * }
    
   De hecho, el else puede ser opcional */

   if(isAdmin){
    var adminPanel=document.getElementById("admin-panel")
    adminPanel.style.display="block";
    console.log('como administrador, solo tu puedes ver esto');
   }else{
    adminPanel.style.display="none";
   }

    //console.log(`Usuario: ${username.value} password: ${password.value}`);
}
 
