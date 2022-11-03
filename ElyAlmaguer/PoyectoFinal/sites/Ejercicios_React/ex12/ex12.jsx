//Elementos movibles con las flechas del teclado
function ElementoMovible(props) {
   //variables de React se crea pero al modificar el valor conservan siempre su valor
    var [elementos, setElementos] = React.useState(props.elementos);  //variable que permite dibujar los elementos     
    var [canMove, setCanMove] = React.useState(new Array(elementos));  //variable reactiva, arreglo con el mismo numero de elementosque se puede mover 
    var [coords, setCoords]= React.useState([1, 1]);                    //representa las coord. top y left en x - y
  // variables convencionales se crean siempre un nuevo arreglo.
    var htmlElements = [];                                             // html que vamos a renderizar
    var lista= [];                                                     // rep. visual del canMove
    var lastTop = 1;                                                   // variable de apoyo para ponerlos en pila hacia abajo el canMove
    // window.onkeydown =function(e) { //ayuda a ver que tecla se ha presionado.
    //     var move = 
    // }
       //al llamar React. useEffect se tienen que hacer 2 cosas:               
     // 1)crear el evento con la variable que esta guardando la funcion con el evento del keydown
     // y recibe 2 cosas,  el nombre del evento y el evento, que es una funcion (ev. =>)
     //*se ejecuta cada que se actualice el componente, *si despues de la funcion ponemos un arreglo vacio se ejectua solo una vez.
     // *y al poner nombres de variables entre corchetes, cuando manda llamar el CanMove.
     // para agregar eventos se utiliza addEventListener como el keydown(al presionar una tecla)
    React.useEffect(function(){        //useEffect (causa-efecto) permite realizar acciones dentro de un componente sin ser parte del componente
        const onKeyDown = function(e){     //el teclado pertenece a la ventana
            //console.log(e.key);         // para ver el Evento Global que al presionar una tecla se puede incrustar un evento de tipo keydown, key press, etc.
            switch(e.key){      //la e te pone el valor de la tecla
                case "ArrowUp":   //tecla flecha arriba.
                    coords[0] = coords[0] - 1;    //Arriba (Y)
                    break;
                case "ArrowDown":
                    coords[0] = coords[0] + 1;    //Abajo  (Y)
                    break;
                case "ArrowLeft":
                    coords[1] = coords[1] - 1;    //Izquierda (x)
                    break;
                case "ArrowRight":
                    coords[1] = coords[1] + 1;    //Derecha (X)
                    break;
                case "Escape":                          // esto limpia al punto inicial y lo reinicia
                    setCanMove(new Array(elementos));
                    break;
            }
            setCoords(Array.from(coords));   //hacemos una copia y actualiza las coordenadas.
            //console.log(coords);           //imprimimos
        }
        window.addEventListener("keydown", onKeyDown); //Eventlistener añade eventos a la pantalla.

        //Clean Up, borra el evento anterior y lo vuelve a añadir, se actualiza en cada cambio de la pagina.
        return function(){
            window.removeEventListener("keydown", onKeyDown);
        }
    });

    for(var i = 0; i <= elementos; i++) {   //for para contar los elementos en este caso se puede contar a partir del 1 pero en los arreglos desde 0
        //onMouseEnter cuando esta el cursor sobre el elemento  //onMouseLeave es igual pero cuando sale del elemento
        const index = i;   //esta es una copia de i, solo existe dentro del for
        htmlElements.push(
        <div 
            //onKeyDownCapture={function(e){           // esto no se uso pero es evento a nivel ventana
        onClick={function(e){                          // esta lista es la rep. visual que tenemos del lado derecho
            for(var j = 0; j < canMove.length; j++){   //hacemos un segundo for cambiamos la i x j
                canMove[j]= false;                     // decimos que no se pueden mover 
            }
            canMove[index] = true;                         // excepto los de [i] 
            //actualizamos el componente
            setCanMove(Array.from(canMove));  //remplazamos el arreglo haciendo una copia de si mismo para actualizar
            //e.target.style.background = "darkcyan";   //aquí cambiamos el estilo
            //e.target.className += "movable";   //añadimos clase movable y cambia position a absolute
            setCoords([1,1]);     //cada vez que se setea una figura, vuelve a las coord. 1, 1
        }} key={index} className={canMove[index] === true ? "square movable": "square"} 
        style={{
            background: canMove[index] !== true ? "darkred" : "darkcyan",
            top: canMove[index] !== true ? '' : (coords[0] + 'rem'),  //esta es la fig. que no se puede mover
            left: canMove[index] !== true ? '' : (coords[1] + 'rem'), //
        }}>{index}</div>
        ); 
        //hasta aquí es la figura y pregunta se supone que puedes mover la figura, actualiza las coord.
        lista.push(<div key={index} style={{          //representacion visual de la lista.
            position: "fixed",
            right: "1rem",
            top: lastTop + "rem",                     // lastTop ayuda a apilar los cuadritos de la rep. visual
            width: "3rem",
            height: "3rem",
            border: "1px solid black",
            background:canMove[index] === true? 'darkcyan': "red"  //operador ternario hace un if al asignar variables
        }}>{index}</div>);  
        lastTop += 3;
     }                                        
 return <>
 {htmlElements}
 {lista}
 </>  
};
ReactDOM.createRoot(document.getElementById('app'))
.render(<ElementoMovible elementos={6}/>)