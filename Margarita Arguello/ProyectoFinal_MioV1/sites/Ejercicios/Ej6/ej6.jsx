/* hay que pasarle las propiedades, se usa una variable cualquiera
por lo general es props
Esta propiedades son las que vienen de la renderizacion*/
function Menu(propiedades){
/*si estan dentro de un objeto es :
propiedad.nom_objeto.variable*/

return <>    
    <h1>{propiedades.business.name}</h1>
    <h2>{propiedades.nom}</h2>
    <h2>{propiedades.nombre}</h2>
    </>
};

/* render(< el nombre de la funcion /b propiedad={nombre del objeto} o propiedad={valor} o propiedad={variable que se usa})*/
ReactDOM.createRoot(document.getElementById("menu")).render(<Menu business={business} nom={"Margarita"} nombre={NAME} />);