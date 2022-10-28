const { useState } = require("react");

function ProductCatalog(props){
    var [user, setUser] = React.useState(null);
    var [cart, setCart] = React.useState(null);
    var [query, setquery] = React.useState(null);
    var [products, setProducts] = React.useState(null);
 
    React.useEffect(function(){
        query = window.location.serarch || '';
    }, []);
    React.useEffect(function(){
        axios
    })
}
    var product =  await Product
    var catalog = <>
        <MainMenu user = {user} cart = {cart} />
        <main className= " container p-0">
            <h1>Catálogo</h1>
    </>
}
