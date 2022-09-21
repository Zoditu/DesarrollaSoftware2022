module.exports = {
    generateToken: function(email) {
        var tokenPart1 = Date.now();//Genera un numero aleatorio
        var tokenPart2 = '';
        for (var i = 0; i < email.length; i++) {
            var c = email.charCodeAt(i);
            tokenPart2 += c;
        }
        
        var tokenPart3 = Date.now();

        var token = tokenPart1 + tokenPart2 + tokenPart3;
        return Buffer.from(token).toString('base64')//Formato codificado que pasa el nùmero a un texto
    },
    encodeEmail: function(email){
        var tokenPart2 = '';
        for (var i = 0; i < email.length; i++) {
            var c = email.charCodeAt(i);
            tokenPart2 += c;
        }

        return Buffer.from(this.encodeEmail + tokenPart2).toString('based64')
    }
};