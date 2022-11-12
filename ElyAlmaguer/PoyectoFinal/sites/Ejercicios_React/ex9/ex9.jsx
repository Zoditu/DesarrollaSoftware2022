
// Una etiqueta personalizada es una funcion. 

//Ejercicio círculos de colores en un array
// const colores=["violet", "cadetblue", "green"]

// function Circulos(props){
//     var html = [];


//     for(var i = 0; i < props.colores.length; i++) {
//         var color = props.colores[i]
//         html.push(
//             <>
//             <div style={{background:color}} className="circulos"></div> 
//             </>
//         );
//     };    
//     return html
// };
// ReactDOM.createRoot(document.getElementById('app')).render(<Circulos colores={colores}/>);

//Ejercicio Circulos de colores de diferentes tamaños con un array y style.


// function Circulos(props){
//     var html = [];


//     for(var i = 0; i < props.colores.length; i++) {
//         const colores = props.colores[i];
//         html.push(
//             <>
//             <div className="circulos" style={{background: colores.color, width: colores.w, height: colores.h }}></div> 
//             </>
//         );
//     }   
//     return html
// }
// const colores= [{
//     color: "violet", 
//     w: "3rem",
//     h: "3rem"
// },
// {
//     color:"cadetblue", 
//     w: "6rem",
//     h: "6rem"
// },
// {
//     color: "green", 
//     w: "9rem",
//     h: "9rem"
// }];
// ReactDOM.createRoot(document.getElementById('app')).render(<Circulos colores={colores}/>);
//

function Circulos(props) {
    const circulos = props.shapes;
    const shapes = [];
    for(var i = 0; i < circulos.length; i++){
        const figura = circulos[i];
        var color = figura.color;
        if (figura.show === false){
            color = "gray";
        }
        shapes.push(<div className="circle" style= {{width: figura.w, height: figura.h, background: color}}></div>)
    } 
    return shapes;
};

const colores = [{
     color: "violet", 
     w: "3rem",
     h: "3rem",
     show: true
 },
 {
     color:"cadetblue", 
     w: "6rem",
     h: "6rem",
     show: false
 },
 {
     color: "green", 
     w: "9rem",
     h: "9rem",
    show: false
 }];
 ReactDOM.createRoot(document.getElementById('app')).render(<Circulos shapes={colores}/>);
