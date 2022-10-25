var saludos = ["Hola", "Hi", "Hey!", "Hello", "Alo"];
var index = 0;

function Saludo() {
    var [saludo, setSaludo] = React.useState("Hey listen!!");
    const nombre = "Tatiana";

    function CambiarSaludo() {
        if(index >= saludos.length) {
            index = 0;
        }

        setSaludo(saludos[index]);
        index = index + 1;
    }

    return <>
        <h1 className="titulo">{saludo}, {nombre}</h1>
        <button onClick={CambiarSaludo}>Cambiar Saludo</button>
    </>;
}

ReactDOM.createRoot(document.getElementById("app")).render(<Saludo/>);