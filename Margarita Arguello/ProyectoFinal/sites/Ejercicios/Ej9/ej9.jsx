/*function Cambiar(props){
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
*/

function AgregaCirculos(props){

var [suma, setSuma]=React.useState(props.num);
var [resta, serResta]=React.useState(props.num);  

const html=[];
console.log(suma)
for (var index = 0; index < props.num; index++) {
        html.push(<div className="circulo"></div>);        
    }
return <>
    <button onClick={function(){
        props.num=setSuma+1;
    }}>Agrega</button>
    <button>Disminuye</button>
    <br></br>
    {html}
</>;
};

ReactDOM.createRoot(document.getElementById("app")).render(<AgregaCirculos num={3}/>);