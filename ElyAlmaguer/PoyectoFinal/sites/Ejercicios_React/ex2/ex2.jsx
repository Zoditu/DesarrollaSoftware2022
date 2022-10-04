function Ely(){
    var nombre = "DS2022";
    nombre = "Ely";

    var html = <>
    <h1>Hola, {nombre}</h1>
    <button>Cambiar</button>
    </>;
    return html;
}
    ReactDOM.createRoot(document.getElementById('app')).render (<Ely/>)
    ReactDOM.createRoot(document.getElementById('Ely')).render (<Ely/>)
//  un componente de ract se representa con una funcion
//  también se puede con una clase.
//  La funcion debe llevar el nombre del componente:
//  si yo quier crear la etiqueta < Ely/>

//  function Ely(){
//  aqui puedo delcarar variables

//     var nombre = "DS2022";
//     nombre = "Ely";

//  puedo renderizar un HTML en una variable si quiero 
//     var html = <>
//     <h1>Hola, {nombre}</h1>
//     <button>Cambiar</button>
//     </>

//  al final, debo retornar el HTML renderizado
//     return html;
//     }
//  Debo indicarle a React donde debo poner el HTML renderizado
//  createRoot: indica quien va a ser el padre de este componente

//     React.createRoot(document.getElementById('Ely')).render (<Ely/>)