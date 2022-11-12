function Circulos(properties) {
    
    var circulos = [];

    for (var i = 0; i < properties.datosColores.length; i++) {
        const colores = properties.datosColores[i];
        circulos.push(
            <>
                <div className="circulo" style= {{background:colores.color}}></div>
            </>);
    }

    return circulos;
}

const coloresCirculos = [{
    color: "red"
},
    {color: "green"},
{}];



ReactDOM.createRoot(document.getElementById('app')).render(<Persona datos={personas} />);