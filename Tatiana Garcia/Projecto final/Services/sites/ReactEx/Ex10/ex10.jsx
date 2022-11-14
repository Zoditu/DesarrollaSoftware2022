function Colores (props) {
    //                                      de aqui viene la propiedad por defecto
    var [color, setColor] = React.useState(props.color);

    return <>
        <div className="circle" style={{
            background: color
        }}></div>
        <input type="color" defaultValue={props.color} onChange={function(){
        setColor(event.target.value);
        }}/>
    </>
}

ReactDOM.createRoot(document.getElementById('app')).render(<Colores color="red"/>);