function Ejercicio4() {

    //var n1 = 10;
    //var n2 = 5;

    var [n1, setN1] = React.useState(10);
    var [n2, setN2] = React.useState(5);
    var [Operación, setOp] = React.useState("NA");

    var html = <>
        <div>
            <input type="text" defaultValue={n1} onInput={ function(){ setN1(event.target.value - 0) } }/>
        </div>
        <div>
            <input type="text" defaultValue={n2} onInput={ function(){ setN2(event.target.value - 0) } }/>
        </div>
        <hr />
           <div>
            <button type="button"value="Sumar" onClick={
            function()(setResultado("Suma:"+(n1+n2)))
            }>Sumar</button>
            <button type="button"value="Restar" onClick={
                function()(setResultado("Restar:"+(n1-n2)))
            }>Restar</button>
            <button type="button"value="Multiplicar" onClick={
                function()(setResultado("Multiplicar:"+(n1*n2)))
            }>Multiplicar</button>
            <button type="button"value="Dividir" onClick={
                function()(setResultado("Dividir:"+(n1/n2)))
            }>Dividir</button>
           </div>
             

            {/* <button id="calcular">Calcular</button> */}

    // <div>
    //      <input type="button" id="Resultado" value={n1+n2}/>
    // </div>  
        <h2>{Operación}</h2>
        {/* <div> Sumar:{n1 + n2}  </div>
        <div> Restar: {n1 - n2} </div>
        <div> Multiplicar: {n1 * n2}</div>
        <div> Dividir: {n1 / n2} </div>  */}

    </>;

    return html;  
    
}

ReactDOM.createRoot(document.getElementById('app')).render(<Ejercicio4/>)
