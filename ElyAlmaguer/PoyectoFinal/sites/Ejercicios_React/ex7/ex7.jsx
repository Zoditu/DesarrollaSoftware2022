function Menu(propiedades){
    var nombre ="Ely";
    return <h1>Empresa: {propiedades.business.name} - {propiedades.nombre} - {propiedades.a}</h1>   //propiedades
}
ReactDOM.createRoot(document.getElementsById('menu')).render(<Menu business={business} a ={5} nombre={NAME}/>);  //etiquetas