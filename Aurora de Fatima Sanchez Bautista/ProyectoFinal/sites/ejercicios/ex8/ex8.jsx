function Persona(properties) {
    
    var html = [];

    for (var i = 0; i < properties.datos.length; i++) {
        const persona = properties.datos[i];
        html.push(
            <>
                <div className="tarjeta">
                    <h1>{persona.name} {persona.lastName}</h1>
                    <hr />
                    <h2>Edad: {persona.age}</h2>
                    <h2>Cumpleaños: {persona.birth}</h2>
                </div>
            </>);
    }

    return html;
}

const aurora = {
    name: "Aurora",
    lastName: "Sanchez",
    age: 29,
    birth: "25/09/1994"
};

var personas = [aurora, {
    name: "Edith",
    lastName: "Santibañez",
    age: 8,
    birth: "21/09/2014"
}];

ReactDOM.createRoot(document.getElementById('app')).render(<Persona datos={personas} />);