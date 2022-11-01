function AddProduct(props){

}

function Admin(props) {

    var [showForm, setShowForm] = React.useState()
    var addProduct = <>
    <div class="card text-bg-light mb-3" style="max-width: 18rem;">
        <div class="card-header">Header</div>
        <div class="card-body">
            <h5 class="card-title">Light card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </div>
    </>
}

ReactDOM.createRoot(document.getElementById('app')).render(<Admin/>)