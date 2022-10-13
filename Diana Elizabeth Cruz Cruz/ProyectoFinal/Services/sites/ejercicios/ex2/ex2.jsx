//Un componente de React se representa con una funciòn
//También se puede con uana clase.
//La función debe de llevar el nombre del complemento
//Si yo quiero crear <kevin/>
function diana(){
//aqui puedo declarar variables
var nombre ="DS2022";
nombre = "Diana"
//Puedo renderizar un HTML en una variable si quiero
var html = <>
<h1>Hola, {nombre}</h1>
<button>Cambiar</button>
</>
//Al final, debo retornar el HTML renderizado
return html;
}

//Debo indicarle a REACT dònde debe de poner el HTML renderizado
//createRoot: Indica quién va a ser el padre de este componente
ReactDOM.createRoot(document.getElementById('app')).render(<diana/>)