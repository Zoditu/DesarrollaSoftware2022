function Circulos(properties){
    var circulos = [ ];

    for (var i=0; i< properties.dataColors.length; i++){
        const colores = properties.dataColors[i];
        
        html.push(
            <div className="circulo">{properties.dataColors.circulo}</div>
        )

    }
}
 ReactDOM.createRoot(document.getElementById('circulos')).render(<circulos/>)

//Los circulos se deben de personalizar, o sea,
//Deben de recirir también el width y height además del colgroup

const circulos = [
    {
        color: "red",
        w:"10rem",
        h:"10rem",
        show: false,
    },
    {
        color: "green",
        w:"10rem",
        h:"10rem",
        show: true,
    },
    {
        color: "blue",
        w:"10rem",
        h:"10rem",
        show: false,
    }
];