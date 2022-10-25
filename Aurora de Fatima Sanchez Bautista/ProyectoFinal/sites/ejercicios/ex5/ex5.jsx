function Ejercicio5() {
    
    //var n1 = 10;
    //var n2 = 5;
    var [n1, setN1] = React.useState(10);
    var [n2, setN2] = React.useState(5);
    var [tipo, setTipo] = React.useState("NA");

    var html = <> 
        <div>
            <input type="text" defaultValue={n1} onInput={function() {setN1(event.target.value - 0) } }/>
        </div>
    
        <div>
            <input type="text" defaultValue={n2} onInput={function() {setN2(event.target.value - 0) } }/>
         </div>

         <div>
            <input type="button" value="+" onClick = {
                function(){setTipo("Suma: " + (n1+n2))}}/>
            <input type="button" value="-" onClick = {
                function(){setTipo("Resta: " + (n1-n2))}}/>
            <input type="button" value="*" onClick = {
                function(){setTipo("Multiplicación: " + (n1*n2))}}/>
            <input type="button" value="/" onClick = {
                function(){setTipo("División: " + (n1/n2))}}/>
         </div>
    
        <hr />

        <h2>{tipo}</h2>
        {/* Suma: {n1 + n2}

        Resta: {n1 - n2}

        Multiplicacion: {n1 * n2}

        Division: {n1/n2} */}

    </>

    return html;
}

ReactDOM.createRoot(document.getElementById('app')).render(<Ejercicio5/>);