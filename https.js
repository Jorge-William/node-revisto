const { send } = require('./request.js');
const { read } = require('./response.js');
const { RESQUEST_TIMEOUT } = require('./request.js');

function makeRequest (url, data){
    send(url, data);
    return read();
}


const responseData = makeRequest('https://google.com', 'Hello')