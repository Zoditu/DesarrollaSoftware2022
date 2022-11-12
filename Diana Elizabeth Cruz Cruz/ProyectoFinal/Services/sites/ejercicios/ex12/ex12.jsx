function ElementoMovible(props) {

    var [elementos, setElementos] = React.useState(props.elementos);
    var [canMove, setCanMove] = React.useState(new Array(elementos));
    var [coords, setCoords] = React.useState([1, 1]);
    var htmlElements = [];
    var lista = [];
    var lastTop = 1;

    React.useEffect(function(){
        const onKeyDown = function(e) {
            switch(e.key) {
                case "ArrowUp": 
                    coords[0] = coords[0] - 1;
                    break;

                case "ArrowDown":
                    coords[0] = coords[0] + 1;
                    break;

                case "ArrowLeft":
                    coords[1] = coords[1] - 1;
                    break;

                case "ArrowRight":
                    coords[1] = coords[1] + 1;
                    break;
                
                case "Escape":
                    setCanMove(new Array(elementos));
                    break;
            }

            setCoords(Array.from(coords));
        }

        window.addEventListener("keydown", onKeyDown);

        //Clean Up
        return function() {
            window.removeEventListener("keydown", onKeyDown);
        }
    });

    for(var i = 0; i < elementos; i++) {
        const index = i;
        htmlElements.push(
            <div onClick={function(e){
                for(var j = 0; j < canMove.length; j++) {
                    canMove[j] = false;
                }
                canMove[index] = true;
                
                setCanMove(Array.from(canMove));
                setCoords([1,1]);
            }} key={index} className={canMove[index] === true ? "square movable" : "square"} 
                style={{
                    background: canMove[index] !== true ? "darkred" : "darkcyan",
                    top: canMove[index] !== true ? '' : (coords[0] + 'rem'),
                    left: canMove[index] !== true ? '' : (coords[1] + 'rem'),
            }}>{index}</div>
            );

        lista.push(<div key={index} style={{
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
        {htmlElements}
        {lista}
    </>;

}

ReactDOM.createRoot(document.getElementById('app'))
        .render(<ElementoMovible elementos={10} />)