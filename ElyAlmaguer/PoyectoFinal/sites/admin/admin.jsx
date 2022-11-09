function AddProduct(props) {     // componente con cada tipo de formulario. 
    var [product, setProduct] = React.useState(props.product || {    //propiedades de un modelo de producto para el formulario en null para visualizarlo en la consola.        
        sku: null,
        stock: 0,
        enabled: true,
        categoryId: null,
        subCategoryId: null,
        categoryType: null,
        name: null,
        description: null,
        model: null,
        brand: null,
        color: null,
        weight: null,
        size: null,
        price: 0,
        images: []
    });

    var [categories, setCategories] = React.useState([]);   // manda llamar las categorias
    var [selectedCategory, setSelectedCategory] = React.useState({ children: [] });
    var [selectedSubCategory, setSelectedSubCategory] = React.useState({ types: [] });

    React.useEffect(function(){       //funcion que se ejecuta cada vez que el componente se crea y se ejec. una sola vez. trae todas las categ. y sub categ. y tipo de categoria.
        props.updateLoader(true);
        axios({                        //de Category/all
            method: 'GET',
            url: '/category/all'
        }).then(function(result){
            setCategories(result.data);    //actualiza categorias
        }).catch(function(error) {
            //TBD
        }).finally(function(){
            props.updateLoader(false);
        });
    },[]);
//esto es para los desplegables.
    var cats = [<option key={"Category-null"} defaultValue={null}></option>];
    var subCats = [<option key={"SubCategory-null"} defaultValue={null}></option>];
    var types = [<option key={"CategoryType-null"} defaultValue={null}></option>];
 //esto genera todas las categorias en el select    
    for(var i = 0; i < categories.length; i++) {
        const category = categories[i].category;
        cats.push(<option selected={category.id === product.categoryId} key={"Category-" + category.id} value={category.id}>
                    {category.name}
                  </option>);

        if(category.id === product.categoryId) {
            selectedCategory = categories[i];
        }
    }
//una vez que tenemos una categoria seleccionada vamos a sacar los hijos de esa categoria.
    const subCategories = selectedCategory.children;   //extraemos las subcategorias hijo.  children
    for(var j = 0; j < subCategories.length; j++) {
        const subCategory = subCategories[j];
        subCats.push(<option selected={subCategory.id === product.subCategoryId} key={"SubCategory-" + subCategory.id} value={subCategory.id}>
                        {subCategory.name}
                    </option>);

        if(subCategory.id === product.subCategoryId) {
            selectedSubCategory = subCategory;
        }
    }
//una vez seleccionada la subcategoria vamos a sacar todos los tipos de productos.
    const subCategory = selectedSubCategory;      //extraemos de subcategory los Types.
    for(var t = 0; t < subCategory.types.length; t++) {
        const type = subCategory.types[t];

        types.push(<option selected={type === product.categoryType}  key={"CategoryType-" + type} value={type}>
                    {type}
                </option>);
    }

    var categoryForm = <>
        <select required onChange={function(e){
/*const selectedCategory = categories[e.target.selectedIndex -1];
  console.log('se seleccionó la categoría:');
  console.table(selectedCategory);
  
  const subCategproes = selectedCategory.children;
  console.log("se supone  que esto es lo que renderiza como subcategorias:")
  console.table(subCategories); */ 

            product.categoryId = e.target.value === '' ? null : e.target.value;     //selecciono la category
            product.subCategoryId = null;      
            product.categoryType = null;
            setProduct(Object.assign({}, product));    //se actualiza

            if(e.target.selectedIndex == 0) {          //si se selecciona el cero 
                setSelectedCategory({ children: [] });
            } else {
                setSelectedCategory(Object.assign({}, categories[e.target.selectedIndex - 1]));
            }
        }} className="form-select" aria-label="Categories">
            {cats}
        </select>

        <select onChange={function(e){
            product.subCategoryId = e.target.value === '' ? null :e.target.value;
            product.categoryType = null;
            setProduct(Object.assign({}, product));

            if(e.target.selectedIndex == 0) {
                setSelectedSubCategory({ types: [] });
            } else {
                setSelectedSubCategory(Object.assign({}, selectedCategory.children[e.target.selectedIndex-1]));
            }
        }} className="form-select" aria-label="Sub Categories">
            {subCats}
        </select>

        <select onChange={function(e){
            product.categoryType = e.target.value === '' ? null :e.target.value;
            setProduct(Object.assign({}, product));
        }} className="form-select" aria-label="Category Type">
            {types}
        </select>
    </>

    var images = [];
    for(var i = 0; i < product.images.length; i++) {
        const image = product.images[i];
        const index = i;

        images.push(
            <div key={"image-preview" + index} className="image-control position-relative mt-3">
                <input required value={image || ''} onChange={function(e){
                    const imageUrl = e.target.value;
                    product.images[index] = imageUrl;
                    setProduct(Object.assign({}, product));
                }} type="text" className="form-control" placeholder="URL Imagen"/>
                
                <span onClick={function(){
                    product.images.splice(index, 1);
                    setProduct(Object.assign({}, product));
                }} title="Borrar Imagen" style={{
                    position: "absolute",
                    top: "0.1rem",
                    padding: "0.3rem",
                    right: "0rem"
                }} className="material-icons control-button">
                    clear
                </span>

                <span onClick={function(){
                    Swal.fire({
                        title: 'Preview',
                        html: `<img src="${product.images[index]}" className="image-preview" />`,
                        showCloseButton: true,
                        showCancelButton: false,
                        focusConfirm: true,
                        confirmButtonText: 'OK',
                      })
                }} title="Preview Image" style={{
                    position: "absolute",
                    top: "0.1rem",
                    padding: "0.3rem",
                    right: "2rem"
                }} className="material-icons control-button">
                    insert_photo
                </span>
            </div>);
    }
//el onSubmit está la funcion vacia con el evento y e.priventDefaul es para que el formulario no recargue la página. 
//console.table(product) funciona para que la información se muestre como una tablita
    return <>
        <form onSubmit={function(e){
            e.preventDefault();
              //console.table(product);
            props.updateLoader(true);

            const sku = product.sku;
            var _product = Object.assign({}, product);
            
            if(!props.product) {
                
                delete _product.sku;
                axios({
                    method: "POST",
                    url: `/products/${sku}`,
                    data: _product
                }).then(function(result){
                    product = {
                        sku: null,
                        stock: 0,
                        enabled: true,
                        categoryId: null,
                        subCategoryId: null,
                        categoryType: null,
                        name: null,
                        description: null,
                        model: null,
                        brand: null,
                        color: null,
                        weight: null,
                        size: null,
                        price: 0,
                        images: []
                    };
                    
                    setProduct(Object.assign({}, product));
                    setSelectedCategory({ children: [] });
                    setSelectedSubCategory({ types: [] });
    
                    Swal.fire({
                        icon: 'success',
                        title: 'Producto creado',
                    });
                }).catch(function(error){
                    if(error.response) {
                        console.log(error.response);
                        Swal.fire({
                            icon: 'error',
                            title: 'Error creando producto',
                            text: JSON.stringify(error.response.data.message)
                        });
                    }
                }).finally(function(){
                    props.updateLoader(false);
                });
            } else {

                console.log(_product);
                axios({
                    method: "PUT",
                    url: `/products/${_product.old_sku}`,
                    data: _product
                }).then(function(result){
                    Swal.fire({
                        icon: 'success',
                        title: 'Producto modificado',
                    });
                }).catch(function(error){
                    if(error.response) {
                        console.log(error.response);
                        Swal.fire({
                            icon: 'error',
                            title: 'Error modificando producto',
                            text: JSON.stringify(error.response.data.message)
                        });
                    }
                }).finally(function(){
                    props.updateLoader(false);
                });
            }
        }}>
            {/* SKU del producto // ||| es el signo de código de barras. */}
            <div className="input-group mb-3">
                <span className="input-group-text" id="sku">|||</span>
                <input required value={product.sku || ''} onChange={function(e){
                    product.sku = e.target.value;
                    setProduct(Object.assign({}, product));    //objetc.assign para copiar el producto en uno nuevo.
                }} type="text" className="form-control" placeholder="SKU" aria-label="SKU" aria-describedby="sku" />
            </div>

            {/* Stock del producto */}
            <div className="input-group mb-3">
                <span className="input-group-text" id="stock">
                    <span className="material-icons">
                        inventory
                    </span>
                </span>
                <input required value={product.stock} onChange={function(e){
                    product.stock = e.target.value;
                    setProduct(Object.assign({}, product));
                }} type="number" className="form-control" placeholder="STOCK" aria-label="STOCK" aria-describedby="stock" />
                <span className="input-group-text" id="enabled_product">
                    <span className="material-icons">
                        check_circle
                    </span>
                </span>
                <div className="form-control">
                    <input className="form-check-input" type="checkbox" defaultChecked={product.enabled} onChange={function(e){
                        product.enabled = e.target.checked;
                        setProduct(Object.assign({}, product));
                    }} id="enabled" />
                    <label className="form-check-label ps-3" htmlFor="enabled">
                        Habilitar producto en el catálogo
                    </label>
                </div>
            </div>
            

            {/* Categorias/SubCategorias/Tipo de categoría del producto */}
            <div className="input-group mb-3">
                {categoryForm}
            </div>

            {/* Nombre del producto */}
            <div className="input-group mb-3">
                <span className="input-group-text" id="name">@</span>
                <input required value={product.name || ''} onChange={function(e){
                    product.name = e.target.value;
                    setProduct(Object.assign({}, product));
                }} type="text" className="form-control" placeholder="Nombre del producto" aria-label="Nombre del producto" aria-describedby="name" />
            </div>

            {/* Descripción del producto */}
            <div className="input-group mb-3">
                <span className="input-group-text" id="description">
                    <span className="material-icons">
                        description
                    </span>
                </span>
                <input required value={product.description || ''} onChange={function(e){
                    product.description = e.target.value;
                    setProduct(Object.assign({}, product));
                }} type="text" className="form-control" placeholder="Descripción del producto" aria-label="Descripción del producto" aria-describedby="description" />
            </div>

            {/* Modelo del producto */}
            <div className="input-group mb-3">
                <span className="input-group-text" id="model">
                    <span className="material-icons">
                        filter_1
                    </span>
                </span>
                <input required value={product.model || ''} onChange={function(e){
                    product.model = e.target.value;
                    setProduct(Object.assign({}, product));
                }} type="text" className="form-control" placeholder="Modelo del producto" aria-label="Modelo del producto" aria-describedby="model" />
            </div>

            {/* Marca del producto */}
            <div className="input-group mb-3">
                <span className="input-group-text" id="brand">
                    <span className="material-icons">
                        branding_watermark
                    </span>
                </span>
                <input required value={product.brand || ''} onChange={function(e){
                    product.brand = e.target.value;
                    setProduct(Object.assign({}, product));
                }} type="text" className="form-control" placeholder="Marca del producto" aria-label="Marca del producto" aria-describedby="brand" />
            </div>

            {/* Color del producto */}
            <div className="input-group mb-3">
                <span className="input-group-text" id="color">
                    <span className="material-icons">
                        palette
                    </span>
                </span>
                <input required value={product.color || ''} onChange={function(e){
                    product.color = e.target.value;
                    setProduct(Object.assign({}, product));
                }} type="text" className="form-control" placeholder="Color del producto" aria-label="Color del producto" aria-describedby="color" />
            </div>

            {/* Peso del producto */}
            <div className="input-group mb-3">
                <span className="input-group-text" id="weight">
                    <span className="material-icons">
                        scale
                    </span>
                </span>
                <input required value={product.weight || ''} onChange={function(e){
                    product.weight = e.target.value;
                    setProduct(Object.assign({}, product));
                }} type="text" className="form-control" placeholder="Peso del producto" aria-label="Peso del producto" aria-describedby="weight" />
            </div>

            {/* Tamaño del producto */}
            <div className="input-group mb-3">
                <span className="input-group-text" id="size">
                    <span className="material-icons">
                        straighten
                    </span>
                </span>
                <input required value={product.size || ''} onChange={function(e){
                    product.size = e.target.value;
                    setProduct(Object.assign({}, product));
                }} type="text" className="form-control" placeholder="Tamaño del producto" aria-label="Tamaño del producto" aria-describedby="size" />
            </div>

            {/* Precio del producto */}
            <div className="input-group mb-3">
                <span className="input-group-text" id="price">
                    <span className="material-icons">
                        attach_money
                    </span>
                </span>
                <input required value={product.price} onChange={function(e){
                    product.price = e.target.value;
                    setProduct(Object.assign({}, product));
                }} type="number" step=".01" min="0" max="999999999" className="form-control" placeholder="Precio del producto" aria-label="Precio del producto" aria-describedby="price" />
            </div>
            <hr />
            <div>
                <section className="row w-100 h-100 align-items-center">
                    <div className="col">
                        <h2 className="d-inline-block">Imágenes</h2>
                        <button onClick={function(){
                                    product.images.push(null);
                                    setProduct(Object.assign({}, product));
                                }}
                                type="button" className="btn btn-primary add-image">
                            <span className="material-icons">
                                add_circle_outline
                            </span>
                        </button>
                    </div>
                </section>
                <section className="mb-3">
                    {images}
                </section>
            </div>

            <button className="btn btn-primary w-100">{props.product ? "Modificar Producto" : "Crear Producto"}</button>
        </form>
    </>
}

function ModifyProducts(props) {
    var [page, setPage] = React.useState(1);
    var [query, setQuery] = React.useState({});
    var [products, setProducts] = React.useState([]);

    React.useEffect(function(){
        props.updateLoader(true);
        axios({
            method: 'GET',
            url: `/products/all?page=${page}`
        }).then(function(result){
            setProducts(result.data);
        }).catch(function(error){
            setProducts([]);
            setPage(1);
        }).finally(function(){
            props.updateLoader(false);
        });
    }, [page]);

    var prodList = [];
    for (var i = 0; i < products.length; i++) {
        const product = products[i];
        prodList.push(
            <article key={`prod-list-${i}`} className="w-100 listed-product px-2 py-3 position-relative">
                <div className="row align-items-center w-100 h-100">
                    <section className="col">
                        <img style={{ height: "3.5rem", width: "3.5rem", objectFit: "contain" }} src={product.images[0] || default_image} />
                        <span className="ps-2">{product.name}</span>
                    </section>
                </div>
                <span className="small delete px-2">Eliminar</span>
                <span onClick={function(){
                            var _product = Object.assign({}, product);
                            _product.old_sku = product.sku;
                            props.updateSelectedProduct(_product);
                            props.updateForm(props.forms.ADD_PRODUCT);    
                      }}
                      className="small px-2 modify material-icons">
                    edit
                </span>
                <span className="small sku">{product.sku}</span>
            </article>);
        
    }

    var html = <>
        <div className="input-group mb-3">
            <select className="form-select" aria-label="SKU">
                <option value="name">By Name</option>
                <option value="categoryId">By Category Id</option>
                <option value="subCategoryId">By SubCategory Id</option>
                <option value="categoryType">By Category Type</option>
                <option value="model">By Model</option>
                <option value="brand">By Brand</option>
                <option value="color">By Color</option>
                <option value="price">By Price</option>
                <option value="stock">By Stock</option>
            </select>
            <input className="form-control" type="search" placeholder="Search a product" />
        </div>
        <div className="input-group">
            <button className="w-100 btn btn-primary" type="button">Search</button>
        </div>
        <hr />
        {prodList}
    </>;

    return html;
}

function Admin(props) {
//Constante con un objeto con varias propiedades 
    const forms = {
        ADD_PRODUCT: "add-product",
        MODIFY_PRODUCT: "modify-product",
        NONE: ""
    };

    var [showLoader, setShowLoader] = React.useState(false);
// variable que permite hacer cambios    
    var [showForm, setShowForm] = React.useState(forms.NONE);
    var [selectedProduct, setSelectedProduct] = React.useState(null);
//tarjeta para añadir el producto. 
    var buttons = <>
        <div className="card action-product">
            <div className="card-header">
                Añadir Producto
            </div>
            <div className="card-body">
                <h5 className="card-title">Añade un nuevo producto</h5>
                <p className="card-text">Esto te permite crear productos en la BDD</p>
                <a onClick={function(){
                    setShowForm(forms.ADD_PRODUCT);     //muestra el formulario para crear el producto
                    setSelectedProduct(null);
                }} href="#" className="w-100 btn btn-primary">Crear</a>
            </div>
        </div>

        <div className="card action-product">
            <div className="card-header">
                Modificar Producto
            </div>
            <div className="card-body">
                <h5 className="card-title">Modifica un producto</h5>
                <p className="card-text">Puedes buscar productos por nombre, sku, o categorías.</p>
                <a onClick={function(){
                    setShowForm(forms.MODIFY_PRODUCT);   //muestra el formulario de modificar producto
                }} href="#" className="w-100 btn btn-primary">Modificar</a>
            </div>
        </div>
    </>;
//para regresar los botones el onSubmit={function(e){e.preventDefault();}} es para que no recargue la página
// formulario
    var form;
    switch(showForm) {
        case forms.ADD_PRODUCT:
            form = <AddProduct updateLoader={setShowLoader} product={selectedProduct}/>;
        break;

        case forms.MODIFY_PRODUCT:
            form = <ModifyProducts updateLoader={setShowLoader} updateSelectedProduct={setSelectedProduct}
                                   forms={forms} updateForm={setShowForm}/>;
        break;
    }
//validación para regresar un formulario, sino regresamos un addProduct regresamos los botones.
// var html para mostrar el formulario.
    if(showForm !== forms.NONE) {
// span con un tachita para cerrar la tarjeta. Cuando de click a la tachita pone el evento llama la funcion  de 
//los formularios en NONE para cerrar y poder hacer algo más = SPA Single Page Apliation no necesitas ir a otra subpag. para seguir en algo más.        
        return <>
        <Loader visible={showLoader}></Loader>
        <h1 className="px-3">
            Admin
        </h1>
        <main className="container p-0">
            <div className="form-controls mb-3">
                <span className="close-form" onClick={function(){
                    setShowForm(forms.NONE);
                }}>X</span>
            </div>
            {form}
        </main>
        </>;
    } else {
        return <>
            <h1 className="px-3">
                Admin
            </h1>
            <div className="text-center">
                {buttons}
            </div>
        </>
    }
}
//renderizamos la etiqueta de Admin
ReactDOM.createRoot(document.getElementById('app')).render(<Admin />)
