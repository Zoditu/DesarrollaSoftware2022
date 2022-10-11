function Persona(propiedades) {

    
     return <>
        <div className="cuadro">
            <h1>{propiedades.datos.nombre} {propiedades.datos.apellido}</h1>
        </div>
        <div className="cuadro2">
            <h1>{propiedades.datos.edad}</h1>
            <h1>{propiedades.datos.cumple}</h1>
        </div>
    </>;

}

ReactDOM.createRoot(document.getElementById('app')).render(<Persona datos = {persona} />);