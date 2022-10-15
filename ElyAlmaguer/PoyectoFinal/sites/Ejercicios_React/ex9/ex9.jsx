function Circulo(properties) {

    var circulos = [
        {
            color:"red",
            w: "4rem",
            h:"4rem",
            show: true
        },
        {
            color:"green",
            w: "4rem",
            h:"4rem",
            show: true
        },
        {
            color:"blue",
            w: "4rem",
            h:"4rem",
            show: true
        }

    ];

    for (var i = 0; i < properties.Colors.length; i++) {
        const colores = properties.dataColors[i];
        consolog.log{colores};
        circulos.push(
            <>
                <div className="col" style={{background:colores.color}}></div>
            </>
            );
    }

    return circulos;
}

const coloresCirculos = [{
    color: "red",
    w:"10rem",
    h:"10rem" 
},
{
    color: "blue",
    w:"15rem",
    h:"15rem" 
},
{
    color: "yellow",
    w:"20rem",
    h:"20rem" 
}];

ReactDOM.createRoot(document.getElementById('app')).render(<circulos dataColors={coloresCirculos}/>);





