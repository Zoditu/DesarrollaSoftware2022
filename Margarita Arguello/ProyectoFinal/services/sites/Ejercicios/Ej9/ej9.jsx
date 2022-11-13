

function Cambiar(props){
    var [color, setColor]=React.useState(props.color)
    var html = <>
        <div className="forma" style={{background: color}}></div>
        <input type="color" defaultValue={props.color} onChange={function(){
                setColor(event.target.value);
        }} />
    </>
return html;
};

ReactDOM.createRoot(document.getElementById("app")).render(<Cambiar color={"#f0000"}/>);
/*

function AgregaCirculos(props){

var [circulo, setCirculo]=React.useState(props.num);


const html=[];

for (var index = 0; index < circulo; index++) {
        html.push(<div key={index} className="circulo"></div>);        
    }
return <>
    <button onClick={function(){
        setCirculo(circulo+1);
    }}>Agrega</button>
    <button onClick={function(){
        if (circulo>0) {
            setCirculo(circulo-1);            
        }
    }}>Disminuye</button>
    <hr></hr>
    {html}
</>;
};

ReactDOM.createRoot(document.getElementById("app")).render(<AgregaCirculos num={3}/>);*/