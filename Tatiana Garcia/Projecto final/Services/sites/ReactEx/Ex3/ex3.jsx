function Eva03(){

    var [n1, setN1] = React.useState(0);
    var [n2, setN2] = React.useState(0);
    var [operacion, setOperacion] = React.useState("N");

    var html = <>
    <div>
        <input type="text" defaultValue={n1} onInput={ function(){ setN1(event.target.value - 0) } } />
    </div>
    <div>
        <input type="text" defaultValue={n2} onInput={ function(){ setN2(event.target.value - 0) } } />
    </div>
    <input type="button" value="Suma" onClick={ function() {setOperacion("Suma:"+ (n1+n2)) } } />
    <input type="button" value="Resta" onClick={ function() {setOperacion("Resta: "+ (n1-n2)) } } />
    <input type="button" value="Multiplicacion" onClick={ function() {setOperacion("Multiplicacion: " + (n1*n2)) } } />
    <input type="button" value="Division" onClick={ function() {setOperacion("Division: "+ (n1/n2)) } } />
    <hr />
    <h1> {operacion}</h1>

    </>

    return html;
}

ReactDOM.createRoot(document.getElementById('eva03')).render(<Eva03/>);