function MovableElement(properties){
    var [elementos, setElementos] = React.useState(properties.elements);
    var [canMove, setCanMove] = React.useState(new Array(elementos)); //la primera vez esta vacio, pero se reasigna
    var [coordinates, setCoordinates] = React.useState([1,1]);
    var htmlElements = []; //donde renderizamos los cuadros
    var list = []; //renderiza la lista que muestra q esta seleccionado
    var lastTop = 1;

    React.useEffect(function(){
        const oneKeyDown = function(e){
            switch(e.key){
                case "ArrowUp":
                    coordinates[0] = coordinates[0] - 1;
                    break;
                
                case "ArrowDown":
                    coordinates[0] = coordinates[0] + 1;
                    break;

                case "ArrowLeft":
                    coordinates[1] = coordinates[1] - 1;
                    break;

                case "ArrowRight":
                    coordinates[1] = coordinates[1] + 1;
                    break;
            }

            setCoordinates(Array.from(coordinates));
        }
        
        window.addEventListener("keydown", oneKeyDown);

        return function(){
            window.removeEventListener("keydown", oneKeyDown);
        }
    });

    for(var i = 0; i < elementos; i++){
        const index = i;
        htmlElements.push(
            <div onClick={function(e){
                for(var j = 0; j < canMove.length; j++){
                    canMove[j] = false; //recorre toda la lista del canMove y la pone en false
                }
                canMove[index] = true; //solo pone en true al div con el index seleccionado
                // linea 17-20 actualiza variables

                setCanMove(Array.from(canMove)); //se genera una copia del arreglo
                setCoordinates([1,1]);
            }} key = {index} className={canMove[index] === true ? "square movable" : "square"} 
            style={{
                background: canMove[index] !== true ? "darkred" : "darkcyan",
                top: canMove[index] !== true ? '' : (coordinates[0] + 'rem'),
                left: canMove[index] !== true ? '' : (coordinates[1] + 'rem'),
            }}>{index}</div> //un div con un numero
        );

        list.push(<div key={index} style={{
            position: "fixed",
            right: "1rem",
            top: lastTop + "rem",
            width: "3rem",
            height: "3rem",
            border: "1px solid black",
            background: canMove[index] === true ? 'darkcyan' : "red"
        }}>{index}</div>);
        lastTop += 3;

    }

    return <>
        {htmlElements};
        {list};
    </>
}

React.createRoot(document.getElementById('app')).render(<MovableElement elements = {6}/>)