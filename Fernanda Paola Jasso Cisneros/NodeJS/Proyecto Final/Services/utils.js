module.exports = {
    var tokenPart1 = Date.now();
    var tokenPart2 = '';
    for (var i = 0; i < email.length; i++){
        var c = email.charCodeAt(i);
        tokenPart2 += c;
    }

    var tokenPart3 = Data.now();

    var tokenFinal = tokenPart1 + tokenPart2 + tokenPart3;
    return Buffer.from(token).toString('base64');
},

encodeEmail: function(emailEncode){
    var encodedEmail = '';
    for(var i=0; i<email.length; i++){
        var c = email.charCodeAt(i);
        encodedEmail += c;
    }

    var tokenPart2 = Date.now();
    return Buffer.from(encodedEmail + tokenPart2).toString('base64');
};