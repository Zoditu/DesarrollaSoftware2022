// se crea una funcion para poder renderizar
function Encabezado(){
    // se declaran las variables si es necesario
    var encabezado = "Desarrollo de Software 2022";
    var salto = "-";
    var nombre = "Ana Margarita";

    
    //renderizo lo que se va a utilizar en el html

    var html = <>
        <h1>{encabezado}</h1>
        <div>{salto}</div>
        <h1>{nombre}</h1>
        </>;

    // hay que retornal la variable
    return html;

}

// indicar a react donde poner lo de la funcion
ReactDOM.createRoot(document.getElementById("equis")).render(<Encabezado/>);