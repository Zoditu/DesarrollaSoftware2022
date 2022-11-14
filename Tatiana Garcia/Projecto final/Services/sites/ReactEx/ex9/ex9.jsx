//Los círculos se deben poder personalizar, o sea,
//Deben recibir también el width y height además del color

function Figuras(props) {
    // var [numero, setNumero] = React.useState(props.num);

    // return <>
    //     <h1>{numero}</h1>
    //     <button onClick={function(){
    //         setNumero(numero + 1);
    //     }}>Cambiar numero</button>
    // </>;

    var [figuras, setFiguras] = React.useState(Array.from(props.shapes));
    const shapes = [];

    for (var i = 0; i < figuras.length; i++) {
        const figura = figuras[i];
        var color = figura.color;
        if(figura.show === false) {
            color = "gray";
        }

        var button = <>
            <div className="row align-items-center text-center m-0 h-100 w-100">
                <div className="col">
                    <button onClick={function(){
                        if(figura.type === 'circle') {
                            figura.type = "square";
                        } else {
                            figura.type = "circle";
                        }
                        
                        setFiguras(Array.from(figuras));
                    }} type="button" className="btn btn-primary">
                        Cambiar
                    </button>
                </div>
            </div>
        </>;

        if(figura.type === "circle") {
            shapes.push(<div className="shape" style={{ borderRadius: "100%", width: figura.w, height: figura.h, background: color}}>
                {button}
            </div>);
        } else {
            shapes.push(<div className="shape" style={{ width: figura.w, height: figura.h, background: color}}>
                {button}
            </div>);
        }
    }

    return shapes;
}

const figuras = [{
    type: "square",
    color: "red",
    w: "10rem",
    h: "10rem",
    show: true
},
{
    type: "circle",
    color: "orange",
    w: "10rem",
    h: "10rem",
    show: true
}, 
{
    type: "circle",
    color: "green",
    w: "10rem",
    h: "10rem",
    show: false
}];

ReactDOM.createRoot(document.getElementById('app')).render(<Figuras shapes={figuras} num={15} />)