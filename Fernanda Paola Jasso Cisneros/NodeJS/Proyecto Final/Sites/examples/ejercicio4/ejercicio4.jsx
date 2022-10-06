function Imprimirarray(){
    const nombres = ["fer", "hector", "hola", "qtepasa"];
    var [text, setText] = React.useState("");

    var html = <>
    <div>
        <h1>Este es el Array:</h1>
        <button type="button" value="array" onClick={
            function(){
                var text2 = "";
                for (var i = 0; i<nombres.length; i++){
                    text2 += nombres[i] + ", ";
                }
                setText(text2);
            }
        }>Mostrar</button>
    </div>
    <h2>{text}</h2>
    </>;

    return html;
}

ReactDOM.createRoot(document.getElementById('app')).render(<Imprimirarray/>);