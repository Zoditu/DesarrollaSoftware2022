function Figuras (properties) {
    //copia del array
    var [figuras, setFiguras] = React.useState(Array.from(props.shapes));
    const shapes = [];
    
    for(var i = 0; i < figuras.length; i++){
        const figura = figuras[i];
        var color = figura.color;
        if (figura.show === false){
            color = "grey;"
        }

    var button = <>
    <div className="row align-items-center text -center m-0 h-100 w-100">
        <div className="col">
        <button onClick={funtion(){
            if(figura.type === 'circle') {
                figura.type = "square";
            } else {
                figura.type ="circle";
            }
            setFiguras(Array.from(figuras));
    <button type="button" className="btn btn primary">
        Cambiar
        </button>
        
    return shapes;

    ReactDOM.createRoot(document.getElementById('app')).render(<figuras shapes={figuras}/>);
