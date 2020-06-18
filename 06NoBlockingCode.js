const http = require('http');
const sistarc = require('fs');

const server = http.createServer((req, res) => {
const url = req.url;
const metodo = req.method;
if(url === "/"){
    res.write('<html>');
    res.write('<head><title>Mensaje</title></head>');
    res.write('<body><form action="/mensaje" method="POST"><input type="text" name="mensaje"><button type="submit">Enviar</button></form></body>')
    res.write('</html>');    
    return res.end();    
}
if(url === "/mensaje" && metodo==='POST'){
    const body = [];
    req.on('data', (chunk) => {
        console.log(chunk);
        body.push(chunk);
    });
    req.on('end', () => {
        const parseBody = Buffer.concat(body).toString();
        const message = parseBody.split('=')[1];
        sistarc.writeFile("mensaje.txt", message, (err) => {
            res.statusCode = 302; //este codigo significa redireccion
            res.setHeader('Location', '/');
            return res.end();        
        });
    });
}
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Mensaje</title></head>');
    res.write('<body>Este es un mensaje enviado</body>')
    res.write('</html>');    
    res.end();
});

//iniciando el socket
server.listen(3500);