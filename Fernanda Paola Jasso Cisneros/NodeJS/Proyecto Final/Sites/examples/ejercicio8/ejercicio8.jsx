function Persona(properties){
    
    var html = [];

    for(var i = 0; i < properties.data.length; i++){
        const persona = properties.data[i];
        html.push(
            <>
            <div className="card">
            <div className="card-body">
            <h5 className="card-title">{persona.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{persona.lastname}</h6>
            <p className="card-text">Edad {persona.age} - Cumpleaños {persona.birthdate}</p>    
            </div>
            </div>
            </>);
           
}

    return html; 
}

var personas2 = [fer, {
    name: "hector",
    lastname: "moya",
    age: "20",
    birthdate: "15/09"
}];

ReactDOM.createRoot(document.getElementById("app")).render(<Persona data={personas2}/>);