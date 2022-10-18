module.exports = {
    generateToken: function(email) {
        var tokenPart1 = Date.now();
        var tokenPart2 = '';
        for (var i = 0; i < email.length; i++) {
            var c = email.charCodeAt(i);
            tokenPart2 += c;
        }
        
        var tokenPart3 = Date.now();

        var token = tokenPart1 + tokenPart2 + tokenPart3;
        return Buffer.from(token).toString('base64');
},
encodeEmail: function(email) {
    var encodeEmail = '';
        for (var i = 0; i < email.length; i++) {
            var c = email.charCodeAt(i);
            encodeEmail += c;
}

    var tokenPart2 = Date.now();

    return Buffer.from(encodeEmail + tokenPart2).toString('base64');
}

};
