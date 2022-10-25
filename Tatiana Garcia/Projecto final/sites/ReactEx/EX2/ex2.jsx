//un componente de react se representa con una funcion en react funcional. 
function Eva02(){
    var nombre = "Asuka";

    var html = <>
    <h1>Neon Genesis Evangelion </h1>
    <hr />
    <h1>{nombre}</h1>
    </>

    return html;
}

ReactDOM.createRoot(document.getElementById('eva02')).render(<Eva02/>);