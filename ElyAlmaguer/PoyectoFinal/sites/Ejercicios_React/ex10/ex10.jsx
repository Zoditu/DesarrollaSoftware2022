// Cambiar figura con false or true.
// Los circulos se deben poder personalizar, o sea, deben recibir también width y height además del color.

//     function Figuras(props) {
//     const figuras = props.shapes;
//     const shapes = [];
//     for(var i = 0; i < figuras.length; i++){
//         const figura = figuras[i];
//         var color = figura.color;
//         if (figura.show === false){
//             color = "gray";
//         }
//         if(figura.type === "circle"){
//             shapes.push(<div className="shape circle" style= {{width: figura.w, height: figura.h, background: color}}></div>)
//         } else {
//             shapes.push(<div className="shape square" style= {{width: figura.w, height: figura.h, background: color}}></div>)
//         }
        
//     } 
//     return shapes;
// };

// const figuras = [{
//     type:"square",
//     color:"red",
//     w:"10rem",
//     h:"10rem",
//     show: true
// },
// {
//     type: "circle",
//     color:"orange",
//     w:"10rem",
//     h:"10rem",
//     show: true
// },
// {
//     type:"circle",
//     color:"green",
//     w:"10rem",
//     h:"10rem",
//     show: false
// }];
// ReactDOM.createRoot(document.getElementById('app')).render(<Figuras shapes={figuras}/>);
    
// ejercicio de cambiar figura mediante un botón.

// en las variables simples como num, texto, boleanos (var x = 10 y se reasigna a otra se copia el valor)
// cuando la variable tiene un objeto o un arreglo var Obj=[1, 2, 3,]; si se reasigna como var cpyObj no crea copia hace REFERENCIA a lo mismo sería el mismo valor.
// si se modifica en una cambia en ambos y muestra lo mismo. los datos son inmutables. se modifica atraves de un setter
//en lugar de pasar props.shape directo, se hizo una copia con ARRAY.FROM(props.shapes)

//function Figuras(props) {
    /* variable simple esto no funcionaría por la inmutabilidad
    // var numero = 10; 
    // var numero = props.num; // esta variable es igual a la anterior y no funcionaría si se quiere cambiar el número.
    // hay que cambiar a una variable de React. con una variable y una funcion (set) y el valor que se asigna es con el React. */

    // /* var[numero, setNumero] = React.useState(props.num);  //aquí num hace una copia simple.
    //  return <>
    //      <h1>{numero}</h1>
    //      <button onClick={function(){
    // numero += 1; esto se cambia a set*/

    //          setNumero(numero + 1);
    //      }}>Cambiar numero</button>
    //  </>;
     

    function Figuras(props) {
    var[figuras, setFiguras]= React.useState(Array.from(props.shapes)); //se hizo una copia de la variable.
    const shapes = [];

    for(var i = 0; i < figuras.length; i++){
        const figura = figuras[i];
        var color = figura.color;
        if (figura.show === false){      // esta es una variable de alcance local al terminar la llave ya no existe.
            color = "gray";          
        }
        /* aquí damos forma al botón para centrar con el div y la col*/
        var button = <>
        <div className="row align-items-center m-0 h-100 w-100">
            <div className="col">
                <button onClick={function(){
                    if(figura.type === "circle") {
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

        if(figura.type === "circle"){
            shapes.push(<div key={i} className="shape" style= {{ borderRadius: "100%", width: figura.w, height: figura.h, background: color}}>
                {button}
            </div>);
        } else {
            shapes.push(<div key={i} className="shape" style= {{width: figura.w, height: figura.h, background: color}}>
                {button}
            </div>);
        }
        
    } 
    return shapes;
}

const figuras = [{
    type:"square",
    color:"red",
    w:"10rem",
    h:"10rem",
    show: true
},
{
    type: "circle",
    color:"orange",
    w:"10rem",
    h:"10rem",
    show: true
},
{
    type:"circle",
    color:"green",
    w:"10rem",
    h:"10rem",
    show: false
}];

ReactDOM.createRoot(document.getElementById('app')).render(<Figuras shapes={figuras} num={15}/>)