function ElementoMovible(props) {
    var [elementos, setElementos] = React.useState(props.elementos);
    var htmlElements = [];

    var [canMove, setCanMove] = React.useState(props.elementos);

    for (var i = 1; i <= elementos; i++) {
        htmlElements.push(
            <div key={i} className="movable square"></div>
        );
    }

    return htmlElements;

}

ReactDOM.createRoot(document.getElementById('app')).render(<ElementoMovible elementos={1} />);
