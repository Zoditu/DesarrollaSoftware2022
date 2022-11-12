function Lista() {
    
    const lista = [35, 32, 8, 30, 65, 60];
    var texto = "";
    //var [texto, setTexto]

    for(var i = 0; i<lista.length; i++) {
        texto += lista[i] + "\n";
    }

    var html = <> 
        <h1>Lista de elementos:</h1>
        <hr />
        <textarea defaultValue={texto}></textarea>
         
    </>;

    return html;
}

ReactDOM.createRoot(document.getElementById('app')).render(<Lista/>);