const http = require('http');
const server = http.createServer((req, res) => {
const url = req.url;
if(url === "/"){
    res.write('<html>');
    res.write('<head><title>Mensaje</title></head>');
    res.write('<body><form action="/mensaje" method="POST"><input type="text" name="mensaje"><button type="submit">Enviar</button></form></body>')
    res.write('</html>');    
    return res.end();    
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