function AddProduct(props) {         // componente con cada tipo de formulario. 
    var [product, setProduct] = React.useState({  //propiedades de un modelo de producto para el formulario en null para visualizarlo en la consola.        
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

    var [categories, setCategories] = React.useState([]); // manda llamar las categorias
    var [selectedCategory, setSelectedCategory] = React.useState({ children: [] });  //
    var [selectedSubCategory, setSelectedSubCategory] = React.useState({ types: [] });

    React.useEffect(function(){    //funcion que se ejecuta cada vez que el componente se crea y se ejec. una sola vez. trae todas las categ. y sub categ. y tipo de categoria.
        axios({                    //de Category/all
            method: 'GET',
            url: '/category/all'
        }).then(function(result){
            setCategories(result.data); //actualiza categorias
        }).catch(function(error) {
            //TBD
        })
    },[]);
//esto es para los desplegables.
    var cats = [<option key={"Category-null"} defaultValue={null}></option>]; //desplega categorias
    var subCats = [<option key={"SubCategory-null"} defaultValue={null}></option>];  //desplega sub-categorias
    var types = [<option key={"CategoryType-null"} defaultValue={null}></option>];   //desplega tipo de producto.
 //esto genera todas las categorias en el select
    for(var i = 0; i < categories.length; i++) {
        const category = categories[i].category;
        cats.push(<option key={"Category-" + category.id} value={category.id}>
                    {category.name}
                  </option>);
    }
//una vez que tenemos una categoria seleccionada vamos a sacar los hijos de esa categoria.
    const subCategories = selectedCategory.children;   //extraemos las subcategorias hijo.  children
    for(var j = 0; j < subCategories.length; j++) {
        const subCategory = subCategories[j];
        subCats.push(<option key={"SubCategory-" + subCategory.id} value={subCategory.id}>
                        {subCategory.name}
                    </option>);
    }
//una vez seleccionada la subcategoria vamos a sacar todos los tipos de productos.
    const subCategory = selectedSubCategory;    //extraemos de subcategory los Types.
    for(var t = 0; t < subCategory.types.length; t++) {
        const type = subCategory.types[t];

        types.push(<option key={"CategoryType-" + type} value={type}>
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

            product.categoryId = e.target.value;  //selecciono la category
            setProduct(Object.assign({}, product)); //se actualiza

            if(e.target.selectedIndex == 0) {   //si se selecciona el cero 
                setSelectedCategory({ children: [] });
            } else {
                setSelectedCategory(Object.assign({}, categories[e.target.selectedIndex - 1]));
            }
        }} className="form-select" aria-label="Categories">
            {cats}
        </select>

        <select onChange={function(e){
            product.subCategoryId = e.target.value;
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
            product.categoryType = e.target.value;
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
            const sku = product.sku;
            var _product = Object.assign({}, product);
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
            })
        }}>
            {/* SKU del producto  // ||| es el signo de código de barras.*/}
            <div className="input-group mb-3">
                <span className="input-group-text" id="sku">|||</span>
                <input required value={product.sku || ''} onChange={function(e){
                    product.sku = e.target.value;
                    setProduct(Object.assign({}, product)); //objetc.assign para copiar el producto en uno nuevo.
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

            <button className="btn btn-primary w-100">Crear Producto</button>
        </form>
    </>
}

function Admin(props) {
//Constante con un objeto con varias propiedades 
    const forms = {
        ADD_PRODUCT: "add-product",
        MODIFY_PRODUCT: "modify-product",
        NONE: ""
    };
// variable que permite hacer cambios
    var [showForm, setShowForm] = React.useState(forms.NONE);
//tarjeta para añadir el producto. 
    var buttons = <>
        <div className="card action-product">
            <div className="card-header">
                Añadir Producto
            </div>
            <div className="card-body">
                <h5 className="card-title">Añade un nuevo producto</h5>
                <p className="card-text">Esto te permite crear productos en la BDD Base de Datos</p>
                <a onClick={function(){
                    setShowForm(forms.ADD_PRODUCT);  //muestra el formulario para crear el producto
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
                    setShowForm(forms.MODIFY_PRODUCT); //muestra el formulario de modificar producto
                }} href="#" className="w-100 btn btn-primary">Modificar</a>
            </div>
        </div>
    </>;
//para regresar los botones el onSubmit={function(e){e.preventDefault();}} es para que no recargue la página
// formulario
var form;
    switch(showForm) {
        case forms.ADD_PRODUCT:
            form = <AddProduct />;
        break;

        case forms.MODIFY_PRODUCT:
            form = <ModifyProduct />;
        break;
    }
//validación para regresar un formulario, sino regresamos un addProduct regresamos los botones.
// var html para mostrar el formulario.
    var html;
    if(showForm !== forms.NONE) {
        // span con un tachita para cerrar la tarjeta. Cuando de click a la tachita pone el evento llama la funcion  de 
        //los formularios en NONE para cerrar y poder hacer algo más = SPA Single Page Apliation no necesitas ir a otra subpag. para seguir en algo más.
        return <>
            <div className="form-controls mb-3">
                <span className="close-form" onClick={function(){
                    setShowForm(forms.NONE);
                }}>X</span>
            </div>
            {form}
        </>;
    } else {
        return  <div className="text-center">
                    {buttons}
                </div>
    }
}
//renderizamos la etiqueta de Admin
ReactDOM.createRoot(document.getElementById('app')).render(<Admin />)