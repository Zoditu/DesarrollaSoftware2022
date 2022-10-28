function Menu(propiedades){
    // var nombre ="Ely";
    // business es un objeto por lo que se pasa con punto.
    return <h1>Empresa: {propiedades.business.name} - {propiedades.nombre} - {propiedades.a}</h1>   //propiedades
}
ReactDOM.createRoot(document.getElementById('menu')).render(<Menu business={business} a ={5} nombre={NAME}/>);  //etiquetas