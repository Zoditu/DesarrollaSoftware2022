function Circulos(properties){
    var circulos = [];

    for (var i = 0; i < properties.dataColors.length; i++){
        const colores = properties.dataColors[i];
        console.log(colores);
        if(properties.dataColors.show === true){
            circulos.push(<>
                <div className={colores.type} style={{background:colores.color, width:colores.width, height:colores.height}}></div>
            </>
            ) 
        } 
        
        
    }

    return circulos;
}

const coloresCirculos = [{
    type: "square",
    color: "red",
    width: "50px",
    height: "50px",
    show: true
},
{
    type: "dot",
    color:"blue",
    width: "100px",
    height: "100px",
    show: false
},
{
    type: "square",
    color:"yellow",
    width: "80px",
    height: "80px",
    show: true
},{
    type: "square",
    color:"green",
    show: false
}];

ReactDOM.createRoot(document.getElementById("app")).render(<Circulos dataColors={coloresCirculos}/>);