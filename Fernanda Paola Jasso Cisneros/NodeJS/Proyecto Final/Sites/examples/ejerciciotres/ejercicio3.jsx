function Ejerciciotres(){
    var titulo = "Desarrolla Software";
    var nombre = "Fernanda";
    var brake = "-----------------";

    var html = <>
        <h1>{titulo}</h1>
        <h1>{brake}</h1>
        <h2>{nombre}</h2>
    </>;

    return html;
}

function Ejerciciocuatro(){

    var [n1, setN1] = React.useState(10);
    var [n2, setN2] = React.useState(5);
    var [tipo, setTipo] = React.useState("NA"); 

    var html = <>
        <div>
            <input type="text" defaultValue={n1} onInput={
                function(){setN1(event.target.value - 0)}
            }/>
        </div>
        <div>
           <input type="text" defaultValue={n2} onInput={
            function(){setN2(event.target.value - 0)}
           }/> 
        </div>
            <button type="button" value="sumar" onClick={
                function(){setTipo("Suma: "+ (n1+n2))} //el set nos dice donde poner el texto
            }>Sumar</button>
            <button type="button" value="restar" onClick={
                function(){setTipo("Resta: "+ (n1-n2))}
            }>Restar</button>
            <button type="button" value="divide" onClick={
                function(){setTipo("División: "+ (n1/n2))}
            }>Dividir</button>
            <button type="button" value="multiply" onClick={
                function(){setTipo("Multiplicacion: "+ (n1*n2))}
            }>Multiplicar</button>
        <hr/>
        <h2>{tipo}</h2>
        {/* <h2>Suma: {n1 + n2}</h2>
        <h2>Resta: {n1 - n2}</h2>
        <h2>Division: {n1 / n2}</h2>
        <h2>Multiply: {n1 * n2}</h2> */}

    </>

    return html;
}

ReactDOM.createRoot(document.getElementById('app')).render(<Ejerciciotres/>);
ReactDOM.createRoot(document.getElementById('appv2')).render(<Ejerciciocuatro/>);