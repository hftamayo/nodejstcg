const http = require('http');
const route = require('./08QuizRoute');

//console.log(route.nuevoTransfer);
const server = http.createServer(route.handler);
server.listen(3500);
console.log("El script ha iniciado");