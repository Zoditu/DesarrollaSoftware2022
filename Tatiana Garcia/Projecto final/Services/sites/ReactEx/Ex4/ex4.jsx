function Eva04() {
    const nombres = ["Shinji", "Rei", "Asuka", "Kaworu"];
    //var texto = "";
    var elementosLista = [];
    //una var [ejemplo, setEjemplo] = React.useState(""); se usa cuando la variable se va actualizar renderizando o realizando algo en la pag 
    //el seter no se puede llamar mas de una vez dentro de un for pq obligas el componente a recargarse constantemenete.
    /*
    var [texto, setTexto] = React.useState("");
    
    <button onClick={ 
        var t = "";
        for ( var i = 0; i < nombres.length; i++) {
            t += nombres[i] + "\n";
                };
        setTexto(t);
    }>Generar</button>
    */
    for ( var i = 0; i < nombres.length; i++) {
        // texto += nombres[i] + "\n";
        elementosLista.push(<li>{nombres[i]}</li>)
            };
    

    var html = <>
        <div><h1>Lista de elementos:</h1></div>
        <hr />
        <ul>
            {elementosLista}
        </ul>
        {/* <textarea>{texto}</textarea> */}
    </>

    return html;
}

ReactDOM.createRoot(document.getElementById('eva04')).render(<Eva04/>);