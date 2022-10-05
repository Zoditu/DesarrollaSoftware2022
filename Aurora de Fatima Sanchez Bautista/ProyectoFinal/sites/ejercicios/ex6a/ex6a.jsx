function Lista() {
    const lista = [35, 32, 8, 30, 65, 60];

    var elementosLista = [];
    var texto = "";
    //var [texto, setTexto] = React.useState("");

    for(var i = 0; i < lista.length; i++) {
        //setTexto(texto + lista[i] + "\n");
        texto += lista[i] + "\n";
        elementosLista.push(<li>{lista[i]}</li>);
    }

    var html = <>
        <h1>Lista de elementos:</h1>
        <hr />
        {/* <textarea defaultValue={texto}></textarea> */}
        <ul>
            {elementosLista}
        </ul>
        {/* <button onClick={ function(){
            var t = "";
            for(var i = 0; i < lista.length; i++) {
                t += lista[i] + "\n";
            }
            //Una recomendación es, NO manden a llamar el setter (setTexto en este caso) más de una vez
            //en un solo evento.
            setTexto(t);
        }}>Generar Lista</button> */}
    </>;

    return html;
}

ReactDOM.createRoot(document.getElementById('app')).render(<Lista />);