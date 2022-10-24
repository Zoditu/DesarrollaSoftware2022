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

const kevin = {
    name: "Kevin",
    lastName: "Martin del Campo",
    age: 20,
    birth: "14/04/1995"
};

var personas = [kevin, {
    name: "Fernanda",
    lastName: "Jasso",
    age: 18,
    birth: "14/04/1995"
}, kevin];

ReactDOM.createRoot(document.getElementById('app')).render(<Persona datos={personas} />);