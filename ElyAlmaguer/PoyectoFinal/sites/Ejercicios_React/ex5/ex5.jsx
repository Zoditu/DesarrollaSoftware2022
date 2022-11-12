// function Lista (){
//     const lista= [10, 20, 30, 40, 50];
//     var texto ="";   // variable de js se uso esta variable porque no se reasigna ningun valor a la variable.
    
// // en los arreglos se utiliza un for
//     for (var i = 0; i <lista.length; i++) {
//         texto += lista[i] + "\n";     //esto añade un enter en el texto
//    }      
//    var html = <>
//    <h1>Lista de elementos</h1>
//    <hr />
   
//    <textarea>{texto}</textarea>
 
//     </>;

//        return html;  
//  };
//     ReactDOM.createRoot(document.getElementById('app')).render(<Lista/>)
// ---------------------
// al dar onclick a un botón genere la lista reasignando el texto.
// function Lista (){

//     const lista= [10, 20, 30, 40, 50];
//         // el set se utiliza cuando se tiene que cambiar algo, como al hacer click en un botón, al escribir en el onInput
//     var [texto, setTexto]= React.useState("");   //cuando se tiene que reasignar una variable en react se utiliza este tipo de variables para renderizar
//         // en los arreglos se utiliza un for</>
             
//    var html = <>
//    <h1>Lista de elementos:</h1>
//    <hr/>
//    <textarea defaultValue={texto}></textarea>   //el textarea soporta los enters
//    <div></div>
//    <button onClick={ function(){
//         var t = "";                  //variable temporal t que está vacía.al darle click al botón a t concatenamos todo</>
//         for(var i = 0; i < lista.length; i++) {    //todo lo que tiene llaves es un alcance.
//             t += lista[i] + "\n";         // aqui se almacenan todos los valores de texto en t
//         }
//         //recomendacion, NO MANDAR LLAMAR EL SETTER (setTexto en este caso mas de una vez en un solo evento)
//         setTexto(t);          //mandamos llamar al set texto con el nuevo valor de t
//    }}>Generar Lista</button>
//     </>;

//        return html;  
//  };
//     ReactDOM.createRoot(document.getElementById('app')).render(<Lista/>)
//.........................
function Lista (){

    const lista= [10, 20, 30, 40, 50];
    //lista.map()         la funcion de map regresa un arreglo,
    var elementosLista = [];    //variable que es un arreglo vacio
    //var texto = "";           //en lugar de utilizar esta variable a los elementos de esta lista incrustamos el push.
   for(var i = 0; i < lista.length; i++) {   
    //texto += lista[i] + "\n";  
    
    elementosLista.push(<li>{lista[i]}</li>);    //es un clon de lista con un li. el push mete en una lista uno por uno los elementos de la const
}  
   var html = <>
   <h1>Lista de elementos:</h1>
   <ul>
        {elementosLista}
   </ul>   
    </>;

       return html;  
 };
    ReactDOM.createRoot(document.getElementById('app')).render(<Lista/>)