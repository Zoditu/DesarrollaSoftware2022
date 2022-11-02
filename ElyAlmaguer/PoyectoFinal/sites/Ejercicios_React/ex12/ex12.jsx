//Elementos movibles con las flechas del teclado
function ElementoMovible(props) {

    var [elementos, setElementos] = React.useState(props.elementos);  //variable que permite dibujar los elementos     
    var htmlElements = [];    // html que vamos a renderizar
    var [canMove, setCanMove] = React.useState(newArray.elementos);  //variable reactiva, arreglo con el mismo numero de elementosque se puede mover 
    var lista= [];
    //     var[coords, setCoords]= React.useState([1, 1]);                   //representa las coord. top y left
        
     for(var i = 0; i <= elementos; i++) {   //for para contar los elementos en este caso se puede contar a partir del 1 pero en los arreglos desde 0
        //onMouseEnter cuando esta el cursor sobre el elemento  //onMouseLeave es igual pero cuando sale del elemento
        canMove[i] = false;
        htmlElements.push(
        <div onClick={function(e){
            for(var j = 0; j < canMove.length; j++){   //hacemos un segundo for cambiamos la i x j
                canMove[j]= false;                     // decimos que no se pueden mover 
            }
            canMove[i] = true;                         // excepto los de [i] 
            setCanMove(Array.from(canMove)); //remplazamos el arreglo haciendo una copia para actualizar
            e.target.style.background = "darkcyan";   //aquí cambiamos el estilo
            e.target.className += "movable";   //añadimos clase movable y cambia position a absolute
        }} key={e} className="square"></div>
        ); 

        lista.push(<div key={i} style={{
            position: "fixed",
            right: "1rem",
            top: lastTop +"rem",
            width: "3rem",
            height: "3rem",
            border: "2px solid black",
            background: "red"
        }}></div>);  
        lastTop +=3;
     }                                        
 return <>
 {htmlElements}
 {lista}
 </>  
};
ReactDOM.createRoot(document.getElementById('app'))
.render(<ElementoMovible elementos={2}/>)