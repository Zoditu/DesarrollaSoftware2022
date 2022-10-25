function Menu(propiedades) {

    return <h1>Empresa: {propiedades.business.name} - {propiedades.nombre} - {propiedades.a}</h1>
}

ReactDOM.createRoot(document.getElementById('menu')).render(<Menu business={business} a={5} nombre={NAME} />);