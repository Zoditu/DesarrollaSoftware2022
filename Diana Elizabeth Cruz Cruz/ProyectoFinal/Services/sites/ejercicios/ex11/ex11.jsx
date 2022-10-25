/*function ColorCircle(props){

    var [color, setColor] = React.useState(props.color);

    return<>
    <div className="circle" style= {{ background: color }}></div>
    <input type="color" defaultValue={color} onChange = {function(){
        setColor(event.target.value);
    }} />
    
    </>
}


ReactDOM.createRoot(document.getElementById('app')).render(<ColorCircle color="#000000"/>);
*/

function ConteoCirculos(){
    var [circulos, setCirculos] = React.useState(props.numCirculos)
    var circles = [];

    for(var i =0; i < circulos; i++) {
        circles.push(<div key={i} className="circle"> </div>);
    }

    return <>
    <button onClick={function(){
        setCirculos (circulos + 1);
    }}>+</button>
    <button onClick>= {function(){
        if(circulos > 0){
            setCirculos(circulos - 1); 
        }
    }}-</button>

    <hr/>
    {circles}

    </>

    }

   

ReactDOM.createRoot(document.getElementById('app')).render(<numCirculos/>);