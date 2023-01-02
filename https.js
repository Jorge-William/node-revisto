const send = require('./request');
const read = require('./response');
const { RESQUEST_TIMEOUT } = require('./request')

function makeRequest (url, data){
    send(url, data);
    return read();
}

const responseData = makeRequest('https://google.com', 'Hello')