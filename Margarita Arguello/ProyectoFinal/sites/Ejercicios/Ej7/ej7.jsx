const persona = [{
    nombre:"Ana",
    apellido:"Arguello",
    edad:"40",
    fecha:"27 julio"
},
    {nombre:"Juan",
    apellido:"Perez",
    edad:"42",
    fecha:"27 Agosoto"}]

function Datos(props){

    var html = []

    for (var i = 0; i < props.persona.length; i++) {
        const persona = props.persona[i];    
        html.push( 
        <> 
        <div className="Card">
        <h2>Nombre  : {persona.nombre} {persona.apellido} </h2>
        <hr />
        <h3>Edad    : {persona.edad}</h3>
        <h3>Fecha   : {persona.fecha}</h3>
        </div>
        </>);
    }

    return html

};

ReactDOM.createRoot(document.getElementById("app")).render(<Datos persona={persona}/>);
