document.body.innerHTML = `
    <div class="circulo" id="circulo1"></div>
    <input type="color" id="color1" onchange="remplaza(1);">
    
    <div class="circulo" id="circulo2"></div>
    <input type="color" id="color2" onchange="remplaza(2);">
    
    <div class="circulo" id="circulo3"></div>
    <input type="color" id="color3" onchange="remplaza(3);">
`


function remplaza(num){
 //Extraer el color
 var colorNuevo = document.getElementById("color"+num);
 colorNuevo=colorNuevo.value;

 var reemplazarColor = document.getElementById("circulo"+num);
 reemplazarColor.style.backgroundColor = colorNuevo;
}