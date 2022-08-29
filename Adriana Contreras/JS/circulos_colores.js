function CambiarColor(idCirculo){
    var idColor = 'color' + idCirculo;

    var circulo=document.getElementById(idCirculo);
    var color=document.getElementById(idColor);

    circulo.style.backgroundColor = color.value ;

}

