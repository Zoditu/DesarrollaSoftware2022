function ElementoMovible(props){

    var [elementos, setElementos] = React.useState(props.elementos);
    var htmlElements = [];
    var [canMove, setCanMove] = new Array(elementos);
    var lista = [];

    for(var i = 0; i<= elementos; i++){
        const index = i;
        canMove[i] = false;
        htmlElements.push(
        <div onClick={function(e){
            for(var j = 0; j < canMove.length; j++){
                canMove[j] = false;
            }
            canMove[i] = true;

            setCanMove(Array.from(canMove));

            e.target.style.background = "darkcyan";
            e.target.className += "movable";
        }} key={i} className="square"></div>
        );


    }


    return htmlElements;
};

ReactDOM.createRoot(document.getElementById('app')).render(<ElementoMovible elementos={2} />);