const RESQUEST_TIMEOUT = 500;

function encrypt(data) {
    return 'encripted data';
}

function send(url, data) {
    const encryptedData = encrypt(data);
    console.log(`sending ${encryptedData} to ${url}`);
}

module.exports = {
    RESQUEST_TIMEOUT,
    send
}

console.log("Hello from request.js")
