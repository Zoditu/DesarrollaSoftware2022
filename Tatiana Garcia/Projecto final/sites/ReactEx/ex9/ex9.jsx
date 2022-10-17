
function Figuras(props) {
    const figuras = props.shapes;
    const shape = [];
    
    // var html = [];

    for(var i = 0; i < figuras.length; i++) {
        const figura = figuras[i];
        var color = figura.color;
            if(figura.show === false) {
                color = "gray";
            }
        
        shape.push = <div className="circle" style={{width: figura.w, height: figura.h, background:figura.color}}></div>;

        }
        return shape;
}

const figuras = [
    {
        type: "square",
        color: "red",
        w:"10rem",
        h:"10rem",
        show: true
    },
    {
        type: "circle",
        color: "orange",
        w:"10rem",
        h:"10rem",
        show: true
    },
    {
        type: "circle",
        color: "green",
        w:"10rem",
        h:"10rem",
        show: false
    }
]


// const coloresC = [{
//     color:"palegoldenrod",
//     w:"10rem",
//     h:"10rem",
//     show: false
// },
// {
//     color:"palegreen",
//     w:"20rem",
//     h:"20rem",
//     show:true
// },
// {
//     color:"paleturquoise",
//     w:"30rem",
//     h:"30rem",
//     show:false
// }];


ReactDOM.createRoot(document.getElementById('app')).render(<Figuras shape={figuras}/>)


