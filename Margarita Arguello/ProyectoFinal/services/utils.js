module.exports = {
    generateToken: function(email) {
        // date.now es la fecha con hora,min,seg,miliseg
        var tokenPart1 = Date.now();
        var tokenPart2 = '';
     
        // genero el numero de cada letra del correo
        for (var i = 0; i < email.length; i++) {
            var c = email.charCodeAt(i);
            tokenPart2 += c;
        }
        
        var tokenPart3 = Date.now();

        // concateno los numeros generados
        var token = tokenPart1 + tokenPart2 + tokenPart3;
        
        // cambia los numeros a texto hy los regreso
        return Buffer.from(token).toString('base64');
    },

    // encodifico el email
    encodeEmail: function(email){
        var encodedEmail = "";
    
        for (var i = 0; i < email.length; i++) {
            var c = email.charCodeAt(i);
            encodedEmail += c;
        }

        var tokenPart2 = Date.now();

        return Buffer.from(encodedEmail + tokenPart2).toString('base64');

    }


};