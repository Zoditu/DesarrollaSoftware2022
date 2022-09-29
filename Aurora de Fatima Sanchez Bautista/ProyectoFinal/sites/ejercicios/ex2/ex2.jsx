//Un componente de React se representa con una funcion
//Tambien se puede con una clase (pero no lo vimos porque puede complicar)
//La funcion debe llevar el nombre del componente:
//Si yo quiero crear <Aurora/>
function Aurora() {
    //Aqui puedo declarar variables
    var nombre = "DS2022";
    nombre = "Aurora";

    //Puedo renderizar un HTML en una variable si quiero
    var html = <>
        <h1>Hola, {nombre}</h1>
        <button>Cambiar</button>
    </>;

    //Al final, debo retornar el HTML renderizado
    return html;
}

//Debo indicarle a React dónde debe poner el HTML renderizado
//createRoot: Indica quién va a ser el padre de este componente
ReactDOM.createRoot(document.getElementById('app')).render(<Aurora/>)