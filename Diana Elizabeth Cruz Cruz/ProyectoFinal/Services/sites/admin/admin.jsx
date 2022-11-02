function AddProduct() {
    var [product, setProduct] = React.useState({
        sku: null,
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

    var [categories, setCategories] = React.useState([]);
    var [selectedCategory, setSelectedCategory] = React.useState({ children: [] });
    var [selectedSubCategory, setSelectedSubCategory] = React.useState({ types: [] });

    React.useEffect(function(){
        axios({
            method: 'GET',
            url: '/category/all'
        }).then(function(result){
            setCategories(result.data);
        }).catch(function(error) {
            //TBD
        })
    },[]);

    var cats = [<option key={"Category-null"} defaultValue={null}></option>];
    var subCats = [<option key={"SubCategory-null"} defaultValue={null}></option>];
    var types = [<option key={"CategoryType-null"} defaultValue={null}></option>];
    for(var i = 0; i < categories.length; i++) {
        const category = categories[i].category;
        cats.push(<option key={"Category-" + category.id} value={category.id}>
                    {category.name}
                  </option>);
    }

    const subCategories = selectedCategory.children;
    for(var j = 0; j < subCategories.length; j++) {
        const subCategory = subCategories[j];
        subCats.push(<option key={"SubCategory-" + subCategory.id} value={subCategory.id}>
                        {subCategory.name}
                    </option>);
    }

    const subCategory = selectedSubCategory;
    for(var t = 0; t < subCategory.types.length; t++) {
        const type = subCategory.types[t];

        types.push(<option key={"CategoryType-" + type} value={type}>
                    {type}
                </option>);
    }

    var categoryForm = <>
        <select required onChange={function(e){
            product.categoryId = e.target.value;
            setProduct(Object.assign({}, product));

            if(e.target.selectedIndex == 0) {
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

    return <>
        <form onSubmit={function(e){
            e.preventDefault();
            console.log("Se supone que va a crear el siguiente producto:");
            console.table(product);
        }}>
            <div className="input-group mb-3">
                <span className="input-group-text" id="sku">|||</span>
                <input required defaultValue={product.sku} onInput={function(e){
                    product.sku = e.target.value;
                    setProduct(Object.assign({}, product));
                }} type="text" className="form-control" placeholder="SKU" aria-label="SKU" aria-describedby="sku" />
            </div>

            <div className="input-group mb-3">
                {categoryForm}
            </div>

            <button className="btn btn-primary w-100">Crear Producto</button>
        </form>
    </>
}

function Admin(props) {

    const forms = {
        ADD_PRODUCT: "add-product",
        MODIFY_PRODUCT: "modify-product",
        NONE: ""
    };

    var [showForm, setShowForm] = React.useState(forms.NONE);

    var buttons = <>
        <div className="card action-product">
            <div className="card-header">
                Añadir Producto
            </div>
            <div className="card-body">
                <h5 className="card-title">Añade un nuevo producto</h5>
                <p className="card-text">Esto te permite crear productos en la BDD</p>
                <a onClick={function(){
                    setShowForm(forms.ADD_PRODUCT);
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
                    setShowForm(forms.MODIFY_PRODUCT);
                }} href="#" className="w-100 btn btn-primary">Modificar</a>
            </div>
        </div>
    </>;

    var form;
    switch(showForm) {
        case forms.ADD_PRODUCT:
            form = <AddProduct />;
        break;

        case forms.MODIFY_PRODUCT:
            form = <ModifyProduct />;
        break;
    }

    var html;
    if(showForm !== forms.NONE) {
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

ReactDOM.createRoot(document.getElementById('app')).render(<Admin />)