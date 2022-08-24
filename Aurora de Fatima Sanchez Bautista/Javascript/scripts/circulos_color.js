function CambiarColor(idCirculo) { //'A'
    //Extraer color
    var idColor = 'color' + idCirculo;
    //idColor = 'colorA';

    var circulo = document.getElementById(idCirculo);
    var color = document.getElementById(idColor);
    circulo.style.backgroundColor = color.value;
}