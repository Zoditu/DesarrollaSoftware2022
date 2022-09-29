function ejerciciotres(){
    var titulo = "Desarrolla Software";
    var nombre = "Fernanda";
    var brake = "-----------------";

    var html = <>
        <h1>{titulo}</h1>
        <hr>{brake}</hr>
        <h2>{nombre}</h2>
    </>;

    return html;
}

function ejerciciocuatro(){
    var squareone = <input type="text"/>;
    var squaretwo = <input type="text"/>;
    var squarethree = <button type="button" value="Sumar"/>;

    var html = <>
        <div>
            {squareone}
        </div>
        <div>
           {squaretwo} 
        </div>
        {squarethree}
        <hr/>
        <h2>Suma: X</h2>

    </>

    return html;
}

ReactDOM.createRoot(document.getElementById('app')).render(<ejerciciotres/>);
ReactDOM.createRoot(document.getElementById('appv2')).render(<ejerciciocuatro/>);