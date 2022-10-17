function Menu(propiedades){
    return <>
        <h1>hola, {propiedades.nombre}</h1>
        <h1>Empresa: {propiedades.business.name} - {propiedades.business.dueño}</h1>
    </>
}

ReactDOM.createRoot(document.getElementById('menu')).render(<Menu business={business2} nombre={NAME}/>);
