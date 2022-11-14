function Ejercicio() {
    var ds22 = "Desarrolla Software 2022";
    var nombre = "Emma Elizabeth Gordillo Sotelo";
    var linea = "------------------------------";

    var html = <>
        <h1>{ds22}</h1>
        <h1>{linea}</h1>
        <h2>{nombre}</h2>
    </>;

    return html;
}

ReactDOM.createRoot(document.getElementById('app'))
        .render(<Ejercicio/>);