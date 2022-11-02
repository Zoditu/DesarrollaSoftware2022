//pasando directamente las propiedades en el ReactDOM.createRoot
// con datos primitivos.
// una etiqueta personalizada es una función, se pasa directamente en (properties)

// function Persona(properties) {
//     return <>
//     <div className="tarjeta">
//         <h1>{properties.name} {properties.lastName}</h1>
//         <hr />
//         <h2>Edad: {properties.age}</h2>
//         <h2>Cumpleaños: {properties.birth}</h2>
//     </div>
// </>;
// }
// ReactDOM.createRoot(document.getElementById('app')).render(<Persona name={"Ely"} lastName = {"Almaguer"} age={"55"} birth={"8/feb/67"}/>); 

// aqui se hizo pasando  un solo  objeto. se renderiza una sola tarjeta con un obeto.
// propiedades se renderiza basada en un objeto se agrega el datos.
// propiedades/atributos perzonalizados /{objeto complejo con varios datos o variable}.
// 

//function Persona(properties) {
//     return <>
//     <div className="tarjeta">
//         <h1>{properties.datos.name} {properties.datos.lastName}</h1>
//         <hr />
//         <h2>Edad: {properties.datos.age}</h2>
//         <h2>Cumpleaños: {properties.datos.birth}</h2>
//     </div>
// </>;
// }
// const Ely= {
//     name: "Ely",
//     lastName: "Almaguer",
//     age: 55,
//     birth: "08/feb/67"
// };

// ReactDOM.createRoot(document.getElementById('app')).render(<Persona datos = {Ely}/>); 

// aquí se hizo con una lista de personas mediante un array o un arreglo
// si queremos que se rendericen dos o más tarjetas dentro del componente de React.
// cuando se hace un arreglo y se quieren generar múltiples etiquetas se necesita una lista vacia[], hacer un for, generar lo que se quiere generar del componente y se ponen los datos de la lista ,  
function Persona(properties) {

    var html = [];
    for(var i =0; i < properties.datos.length; i++){
        const persona = properties.datos[i];
    html.push(
    <>
        <div className="tarjeta">
            <h1>{persona.name} {persona.lastName}</h1>
            <hr />
            <h2>Edad: {persona.age}</h2>
            <h2>Cumpleaños: {persona.birth}</h2>
        </div>
    </>);
}
return html;
}
const Ely= {
    name: "Ely",
    lastName: "Almaguer",
    age: 55,
    birth: "08/feb/67"
};
var personas= [Ely, {
    name: "Enrique",
    lastName: "Gaytán",
    age: 58,
    birth: "07/ene/64"
},];

ReactDOM.createRoot(document.getElementById('app')).render(<Persona datos = {personas}/>); 