const request = require('./request.js');

request.send = function() {
    console.log('Olá mundo!');
}

request.send()