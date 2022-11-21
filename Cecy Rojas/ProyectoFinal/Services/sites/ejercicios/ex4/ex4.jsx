function Ejercicio4() {

    //var n1 = 10;
    //var n2 = 5;
    var [n1, setN1] = React.useState(10);
    var [n2, setN2] = React.useState(5);

    var html = <>
        <div>
            <input type="text" defaultValue={n1} onInput={ function(){ setN1(event.target.value - 0) } }/>
        </div>
        <div>
            <input type="text" defaultValue={n2} onInput={ function(){ setN2(event.target.value - 0) } }/>
        </div>
        <hr />
        Suma: {n1 + n2}
    </>;

    return html;
}

ReactDOM.createRoot(document.getElementById('app')).render(<Ejercicio4/>)