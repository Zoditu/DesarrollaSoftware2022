module.exports = {
    generateToken: function(email) {
        //var codes =[]
         var tokenPart1 = Date.now();  //Date.now regresa el tiempo en milisegrundos desde 1970 a hoy número 1512122838383
         var tokenPart2 = '';          // el del medio es texto para que se junte
        for (var i = 0; i < email.length; i++) {
            var c = email.charCodeAt(i);
            tokenPart2 += c;
            //codes.push(c);
        }
        //console.log(codes);
    //}}
         var tokenPart3 = Date.now();     
         //16121241541255
        var token = tokenPart1 + tokenPart2 + tokenPart3;
        //console.log(Buffer.from(token).toString('base64'));   //lo use al provar con codes
        return Buffer.from(token).toString('base64'); //los números anteriores se codifican a texto con el base 64
     },
     // para codificar el email
    encodeEmail: function(email) {           
         var encodedEmail = '';
         for (var i = 0; i < email.length; i++) {
             var c = email.charCodeAt(i);
             encodedEmail += c;
         }
         var tokenPart2 = Date.now();      
         return Buffer.from(encodedEmail + tokenPart2).toString('base64');
        }
    };
