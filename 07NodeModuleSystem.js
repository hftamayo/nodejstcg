const http = require('http');
const route = require('./07Route');

//const server = http.createServer(route);    

//inicio de codigo para usar requesthandler con hardcode
console.log(route.someText);
const server = http.createServer(route.handler);
//fin de codigo para usar requesthandler con hardcode

//iniciando el socket
server.listen(3500);