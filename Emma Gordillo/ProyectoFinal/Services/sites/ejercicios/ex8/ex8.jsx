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

const emma = {
    name: "Emma",
    lastName: "Gordillo Sotelo",
    age: 48,
    birth: "05/02/1974"
};

var personas = [emma, {
    name: "Dayra",
    lastName: "Vera",
    age: 20,
    birth: "17/08/2002"
}, emma];

ReactDOM.createRoot(document.getElementById('app')).render(<Persona datos={personas} />);