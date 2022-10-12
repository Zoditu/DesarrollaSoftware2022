function lista() {
    const lista = [10, 20, 30, 40, 50];
    var texto = "";
    //var [texto, setTexto]

    for(var i = 0; i <lista.length; i++){
        texto += lista[i] + "/n";
    }



var html = <>
<h1> Lista de elementos:</h1>
<hr />
<textarea>{texto}</textarea>
</>;

return html;

}

ReactDOM.createRoot(document.getElementById('app')).render(<lista/>)