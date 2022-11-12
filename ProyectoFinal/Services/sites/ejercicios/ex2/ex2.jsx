//Un componente de React se representa con una función
//También se puede con una clase
//La función debe llevar el nombre del componente:
//Si yo quiero crear <Kevin/>
function Kevin() {
    //Aquí puedo declarar variables
    var nombre = "DS2022";
    nombre = "Kevin";

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
ReactDOM.createRoot(document.getElementById('app')).render(<Kevin/>)