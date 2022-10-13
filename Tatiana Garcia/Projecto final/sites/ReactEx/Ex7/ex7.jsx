function Menu(propiedades) {

    return <h1>{propiedades.business.name} - {propiedades.nombre}</h1>
}

ReactDOM.createRoot(document.getElementById('menu')).render(<Menu business={business} nombre={NAME}/>);