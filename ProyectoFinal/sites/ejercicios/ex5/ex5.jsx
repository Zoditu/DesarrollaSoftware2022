function Lista() {
    const lista = [10, 20, 30, 40, 50, 90];

    var elementosLista = [];
    //var texto = "";
    //var [texto, setTexto] = React.useState("");

    for(var i = 0; i < lista.length; i++) {
        //setTexto(texto + lista[i] + "\n");
        //texto += lista[i] + "\n";
        elementosLista.push(<li>{lista[i]}</li>);
    }

    var html = <>
        <h1>Lista de elementos:</h1>
        <hr />
        <ul>
            {elementosLista}
        </ul>
        {/* <textarea defaultValue={texto}></textarea> */}
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