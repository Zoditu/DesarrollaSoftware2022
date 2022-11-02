module.exports = {
    generateToken: function(email) {
        var tokenPart1 = Date.now(); //16121241541254
        var tokenPart2 = '';
        for (var i = 0; i < email.length; i++) {
            var c = email.charCodeAt(i);
            tokenPart2 += c;
        }
        //454545654684756465456465464564
        
        var tokenPart3 = Date.now();
        //16121241541255

        var token = tokenPart1 + tokenPart2 + tokenPart3;
        return Buffer.from(token).toString('base64');
    },
    encodeEmail: function(email) {
        var encodedEmail = '';
        for (var i = 0; i < email.length; i++) {
            var c = email.charCodeAt(i);
            encodedEmail += c;
        }

        var tokenPart2 = Date.now();

        return Buffer.from(encodedEmail + tokenPart2).toString('base64');
    },
    generateCartID: () =>  { 
        var tokenPart1 = Date.now();
        var tokenPart2 = "cart-makeup-";
        var tokenPart3 = Date.now();

        return Buffer.from(tokenPart1 + tokenPart2 + tokenPart3).toString('base64');
    }
};