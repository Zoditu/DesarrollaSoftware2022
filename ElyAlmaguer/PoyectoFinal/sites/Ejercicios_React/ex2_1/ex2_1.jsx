
//  function Saludo() {
//    var [DS22, setSaludo] = React.useState("DESARROLLA SOFTWARE 22");
//    var [nombre, setSaludo] = React.useState("ELIZABETH ALMAGUER");
//    var [linea, setSaludo] = React.useState("________________________________");
    
//     var html = <>
//     <h1>{DS22}</h1>
//     <h1>{linea}</h1>
//     <h2>{nombre}</h2>
//     </>;

//     return html;
//    } 
//     ReactDOM.createRoot(document.getElementById("app")).render(<Saludo/>)
 
 
 function Saludo() {
         var DS22 = "DESARROLLA SOFTWARE 2022";
         var nombre = "ELIZABETH ALMAGUER";
         var linea = "________________________________"

         var html = <>
         <h1>{DS22}</h1>
         <h1>{linea}</h1>
         <h2>{nombre}</h2>
         </>;
    
         return html;
        } 
         ReactDOM.createRoot(document.getElementById("app")).render(<Saludo/>)
    