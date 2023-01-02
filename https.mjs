import { send } from './request.mjs';
import { read } from './response.mjs';
import { RESQUEST_TIMEOUT } from './request.mjs';

function makeRequest (url, data){
    send(url, data);
    return read();
}

const responseData = makeRequest('https://google.com', 'Hello')