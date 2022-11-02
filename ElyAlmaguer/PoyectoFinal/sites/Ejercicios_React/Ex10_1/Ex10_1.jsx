// Ejercicio con onInput para cambiar texto en una etiqueta.
//etiqueta Texto de la función
//  function Texto(props) {
//     // text es la varable del props para React (atributo de la etiqueta props.text)
//      var [text, setText] = React.useState(props.text);
//     /* el onInput es para texto en los input*/
//       return <>
//         <input type="text" defaultValue={text} onInput={function(){
//             //event.targent.value contiene el valor del input.
//             //text = event.target.value;   esto no se puede hacer se tiene que hacer el set
//         setText(event.target.value);  // con esta variable es reactiva y actualiza datos de un componente. 
//         }}/>
//         <h1>{text}</h1>
//       </>
//   }                                                //Texto =etiqueta de la funcion  //text = atributo de la etiq. del props.
//   ReactDOM.createRoot(document.getElementById('app')).render(<Texto text="Valor Inicial"/>);
 
// Ejercicio para cambiar el color de un círculo mediante un botón.
//  function ColorCircle(props) {
//  var[color, setColor] = React.useState(props.color);
// //el style ayuda a cambiar el color con las propiedades  la variable color hace una copia para cambiar el color.
// // el onChange si algo va a cambiar se tiene que hacer una copia del valor.
// return <>
//      <div className="circle" style={{background: color}}></div>
//      <input type="color" defaultValue={color} onChange={function(){
//          setColor(event.target.value);
//      }}/>
//      </>
//  }

//  ReactDOM.createRoot(document.getElementById('app')).render(<ColorCircle color="#00FF00"/>); 
// //le decimos a React que cree el contenedor en el elemento que tiene el id "app" y renderice la etiqueta "ColorCircle"

//Ejercicio con array para modificar exactamente lo mismo
// Para actualizar una variable en un evento en este caso un "arreglo" hay que utilizar el  Array.from
//  function ColorCircle(props) {
//      var array = [1,2,3];
//      var y = Array.from(array);
//      y[0] = 11;          //con el fron al modificar y no cambia el valor de la var array

//      var[color, setColor] = React.useState(props.color);
   
//     return <>
//          <div className="circle" style={{background: color}}></div>
//          <input type="color" defaultValue={color} onChange={function(){
//              setColor(event.target.value);
//          }}/>
//          </>
//      }
   
//      ReactDOM.createRoot(document.getElementById('app')).render(<ColorCircle color="#00FF00"/>); 

// // ciclo for. index es igual a cero y se le suma 1 mientras que numeroVeces sea menor a 10
// var numeroVeces = 10;
// for (var index = 0; index < numeroVeces; index++) {
//     console.log(index +1);
// }
// Ejercicio donde pondremos 2 botones de mas y menos y al picar el boton se crea o se borra un círculo 
     
function ConteoCirculos(props) {
    //esta variable circulos es la variable interna que utiliza la etiqueta ConteoCirculos
    //para determinar cuantos círculos debe dibujar
 var [circulos, setCirculos]= React.useState(props.numCirculos);
 //se crea una lista para todos los círculos que se van a poner
 var circles=[];
 //empezamos a conta por el número 0 y agregamos 1 cada vez 
 //se crea un div por cada círculo
 for (var i = 0; i < circulos; i++) {
     circles.push(<div key={i} className="circle"></div>);
     }
     //regresamos dos botones, un separador y los circulos renderizados
     //en el botón en el evento del onClick tenemos una función reasigna el valor de la variable
     //círuclos (más) o (menos) 1 setCirculos remplaza el valor de la varibale circulos
     // con el if ponemos una validación que solo se va a restar 1 si es mayor a 0,
 return <>
        <button onClick={function(){
            setCirculos(circulos + 1);
        }}>+</button>
        <button onClick={function(){
            if(circulos > 0){
            setCirculos(circulos - 1);  
            }
        }}>-</button>
        <hr />
        {circles}
        </>;
 }

 ReactDOM.createRoot(document.getElementById('app')).render(<ConteoCirculos numCirculos={5}/>);
//pasamos una propiedad con un valor inicial de 1 (numCirculos)