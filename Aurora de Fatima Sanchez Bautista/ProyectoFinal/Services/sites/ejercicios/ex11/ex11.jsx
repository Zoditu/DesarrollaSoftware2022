function ConteoCirculos(props) {

    var [circulos, setCirculos] = React.useState(props.numCirculos);
    var circles = [];

    for(var i = 0; i < circulos; i++) {
        circles.push(<div key={i} className="circle"></div>);
    }

    return <>
        <button onClick={function(){
            setCirculos(circulos + 1);
        }}>+</button>
        <button onClick={function(){
            if (circulos > 0) {
                setCirculos(circulos - 1);
            }
        }}>-</button>
        <hr />
        {circles}
    </>;

}

ReactDOM.createRoot(document.getElementById('app')).render(<ConteoCirculos numCirculos={5}/>);

/* function CirculoColor(props) {

    var [color, setColor] = React.useState(props.color);

    return <>
        <div className="circle" style={{background: color}}></div>
        <input type="color" defaultValue={color} onChange={function(){
            setColor(event.target.value);
        }}/>
    </>;
}

ReactDOM.createRoot(document.getElementById('app')).render(<CirculoColor color="#00FF00"/>);

var NumeroVeces = 15;
for (var index = 0; index < array.length; index++) {
    const element = array[index];
    
} */