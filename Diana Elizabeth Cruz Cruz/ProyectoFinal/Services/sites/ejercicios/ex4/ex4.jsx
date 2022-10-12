function Ejercicio4(){
    
    //var n1 = 10;
    //var n2 = 5;

    var[n1,setN1] = React.useState(10);
    var[n2,setN2] = React.useState(5);
    var [tipo, setTipo] = React.useState("NA")

    var html = <>
    <div>
        <input type="text" defaultValue={n1} onInput={function(){setN1(event.target.value - 0 ) } }/> 
        </div>
    <div>
        <input type="text" defaultValue={n2} onInput={function(){setN2(event.target.value - 0 ) } }/>
        </div>
        <button type="button" value="sumar" onClick={
            function(){setTipo("Suma: " + (n1 + n2))}
        }> Sumar + </button>

        <button type="button" value="restar" onClick={
            function(){setTipo("Resta: " + (n1 - n2))}
        }> Restar - </button>

        <button type="button" value="multiply" onClick={
            function(){setTipo("Multiplicación: " + (n1 * n2))}
        }> Multiplicar *  </button>

        <button type="button" value="divide" onClick={
            function(){setTipo("Suma: " + (n1 / n2))}
        }> División / </button>

    <hr />
    <div>Sumar: {n1 + n2}</div>


    </>

    return html;
    }

    //Hacer el ejercicio con 4 botones uno poara sumar, restar, multiplicar y dividir. Cambio linea 16

    ReactDOM.createRoot(document.getElementById('modulos')).render(<Ejercicio4/>);
