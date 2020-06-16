const http = require('http');
const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    //ejemplo para verificar el event cicle de node
    //el server deja de funcionar 
    //aun cuando el evento esta aun ejecucion
    //process.exit();
});

//iniciando el socket
server.listen(3500);