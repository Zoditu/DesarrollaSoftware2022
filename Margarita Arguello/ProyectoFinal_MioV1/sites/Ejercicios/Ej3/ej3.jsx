var res=0
var operacion="Operacion"

function Lectura() {

    var [num1, setNum1]=React.useState(0)
    var [num2, setNum2]=React.useState(0)
    var [signo, setSigno]=React.useState()

    switch(signo){
        case "+" : 
            operacion="Suma"
            res=num1 + num2; 
        break;
        case "-" :    
            operacion="Resta"
            res=num1 - num2; 
        break;
        case "*" :    
            operacion="Multiplicacion"
            res=num1 * num2;
        break; 
        case "/" :    
            operacion="Division"
            res=num1 / num2; 
        break;
        }
 
    var html = <>
        <div>
        <input type="text" onInput={ function() {setNum1(event.target.value - 0)} }/>
        </div>
        <br />
        <div>
        <input type="text" onInput={ function() {setNum2(event.target.value - 0)} }/>
        </div>
        <br />
        <div>
        <input type="button" value="+" onClick={function() {setSigno(event.target.value)}} />
        {/* <input type="button" value="Suma" onClick={function() {setSigno("Suma : "+(n1+n2))}}/> */}
        <input type="button" value="-" onClick={ function() {setSigno(event.target.value)}}/>
        <input type="button" value="*" onClick={function() {setSigno(event.target.value)}} />
        <input type="button" value="/" onClick={ function() {setSigno(event.target.value)}}/>
        </div>
        <br />
        <h4>El resultado de la {operacion} es: {res}</h4>
        {/* <h4>{signo}</h4> */}
        </>;

    return html;
};

ReactDOM.createRoot(document.getElementById('app')).render(<Lectura/>);



