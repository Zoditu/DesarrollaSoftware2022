//los componentes en react se represetan con funciones
/*function hectmo(){
    //declarar variables
    const name = "Fer";
    //html renderizado
    var html=<h1>hola {name}!</h1>;
    //regresar el elemento
    return html;
}*/

function creartitulo(){
    var title = <h1>Desarrolla Software 2022</h1>;
    return title;
}

function createbrake(){
    var brake = <hr>----</hr>;
    return brake;
}

function createname(){
    var name = <h1>Fer</h1>;
    return name;
}

//indicarle a react donde poner el resultado de html renderizado
//createRoot: indica qn es el padre del componente
//q voy a renderizar: hectmo en get element
//despues del render va la funcion4
ReactDOM.createRoot(document.getElementById('titulo')).render(<creartitulo/>);
ReactDOM.createRoot(document.getElementById('brake')).render(<createbrake/>);
ReactDOM.createRoot(document.getElementById('name')).render(<createname/>);