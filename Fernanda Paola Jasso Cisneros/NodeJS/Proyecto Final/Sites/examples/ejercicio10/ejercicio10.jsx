function PickColor(props){
    var [color, setColor] = React.useState(props.first);

    return <>
        <div className="dot" style={{background:color}}></div>
        <input type="color" value={color} onChange={function(){
            setColor(event.target.value);
        }}/>
        {/* <h1>{backcolor}</h1> */}
    </>
}

function ConteoCirculos(properties){
    var [circulos, setCirculos] = React.useState(properties.numCircles);
    var circles = [];

    for(var i = 0; i < circulos; i++){
        circles.push(<div className="dot"></div>);
    }
}

ReactDOM.createRoot(document.getElementById("app")).render(<PickColor first={"#00FF00"}/>);
ReactDOM.createRoot(document.getElementById("app2")).render(<ConteoCirculos numCircles={3}/>);