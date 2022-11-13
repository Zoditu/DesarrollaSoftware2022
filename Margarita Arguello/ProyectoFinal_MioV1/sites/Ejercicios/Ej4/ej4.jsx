

function Arreglo(){
    const animales=["perro","gato","pajaro"];
    var elemento = [];
    var elem="";
/*    var [elem, setElem]=React.useState()
 en este caso no usamos el Set ya que la variable no cambia
 el set se usa solo si hay un elemento que interactue y cambie la variable*/

    for(var i=0; i<animales.length; i++)
        {
        elem += animales[i] + "\n";
        elemento.push(<li>animales[i}</li>)
        }
    
    var html=<>
        <h3>Lista de Elementos</h3>
        <hr />
        <textarea>{elem}</textarea>
        
    </>

    return html    
};

ReactDOM.createRoot(document.getElementById('app')).render(<Arreglo/>);
