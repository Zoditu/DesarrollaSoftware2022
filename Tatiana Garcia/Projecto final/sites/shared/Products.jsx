function Products(props) {

    const products = props.products;
    var prod = [];

    for(var i = 0; i < products.length; i++) {
        const product = products[i];
        const images = [];

        for(var j = 0; j < product.images.length; j++) {
            images.push(
                <div key={`product-carousel-item-${product.sku}-${j}`} className={ j === 0 ? "carousel-item active" : "carousel-item"}>
                    <img src={product.images[j]} className="d-block w-100" alt="..." />
                </div>
            );
        }

        prod.push(<>
            <article key={`product-item-${product.sku}`} className="col-xl-3 col-lg-4 pb-3">
                <div className="card product">
                    <div id={"Controls-Carrousel-Product-" + i} className="carousel slide card-img-top" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            {images}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target={"#Controls-Carrousel-Product-" + i}
                            data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target={"#Controls-Carrousel-Product-" + i}
                            data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">{product.description}</p>
                    </div>
        
                    <div className="accordion accordion-flush" id={"Accordeon-" + i}>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id={"Accordeon-Heading-" + i}>
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target={"#Accordeon-Flush-" + i} aria-expanded="false" aria-controls="flush-collapseOne2">
                                    Detalles del producto
                                </button>
                            </h2>
                            <div id={"Accordeon-Flush-" + i} className="accordion-collapse collapse" aria-labelledby={"Accordeon-Heading-" + i}
                                data-bs-parent={"#Accordeon-" + i}>
                                <div className="accordion-body">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Nombre: {product.name}</li>
                                        <li className="list-group-item">Modelo: {product.model}</li>
                                        <li className="list-group-item">Marca: {product.brand}</li>
                                        <li className="list-group-item">Color: {product.color}</li>
                                        <li className="list-group-item">Peso: {product.weight}</li>
                                        <li className="list-group-item">Tamaño: {product.size}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
        
                    <div className="card-body">
                        <section className="row m-0 w-100 h-100 align-items-center">
                            <article className="col">
                                <span className="float-left precio-producto">{product.price}</span>
                                <button onClick={function() {
                                    axios({
                                        method: 'PUT',
                                        url: `/cart/${product.sku}`,
                                        data: {
                                            amount: 1
                                        }
                                    }).then(function(result){
                                        props.updateCart(result.data);
                                    }).catch(function(error){
                                        //TBD
                                    });
                                }} type="button" className="btn float-right agregar-producto">
                                    <span className="material-icons">
                                        add_shopping_cart
                                    </span>
                                </button>
                                <div className="clear-both"></div>
                            </article>
                        </section>
                    </div>
                </div>
            </article>
        </>);
    }

    return <>
        <section className="row justify-content-center">
            {prod}
        </section>
    </>;
}