// en react funcional crea una etiqueta personalizada con una funcion con el nombre de la etiqueta.
// las variables que cambian se declaran como var y dentro de corchetes el nombre de la variable, set....= React.useState ("el valor que tiene")
// al finalizar se crea en la página ReactDOM. se crea una aplicación de un elemento de la etiqueta que quiero afectar o cambiar a HTML con react
// la etiqueta lleva el mismo nombre de la etiqueta que va a renderizar
// React manipula el contenido de la página de forma dinámica y linkea el contenido de algunos elementos con las propiedades que se definan
// para renderizar 2 o mas elementos se debe poner una etiqueta vacía con su cierre <></>
// cuando se crean variables (de function) [] se compone de dos partes, el nombre de la variable y un Setter. que permite cambiar el valor a la variable
var saludos = ["hola", "Hi", "Hello", "Alo"];
    var index = 0;

function Saludo() {
    //var [saludo, setSaludo] = React.useState("DS2022");
    var [saludo, setSaludo] = React.useState("Heyo!");
    const nombre = "Elizabeth";
   

    function CambiarSaludo(){
        //console.log(saludos);
        //console.log(index);
        if(index >= saludos.length) {
            index = 0;
        }
        setSaludo(saludos[index]);
        index = index + 1;
    }
//renderizar un sola etiqueta
//    return 
//    <h1 className="titulo">{saludo}</h1>;

//renderizar varias etiquetas 
    return <>
    <h1 className="titulo">{saludo}, {nombre}</h1>
    <button onClick={CambiarSaludo}>Cambiar Saludo</button>;
    </>;
}

ReactDOM.createRoot(document.getElementById("app")).render(<Saludo/>);
