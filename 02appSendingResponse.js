const http = require('http');
const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    //ejemplo para verificar el event cicle de node
    //el server deja de funcionar 
    //aun cuando el evento esta aun ejecucion
    //process.exit();
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Sending Response</title></head>');
    res.write('<body>Ejemplo de Sending Response</body>')
    res.write('</html>');    
    res.end();
});

//iniciando el socket
server.listen(3500);