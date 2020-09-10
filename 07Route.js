//volver a ejecutar el codigo, cuando he enviado el texto genera un error de encabezado, corregir
//la linea 11 esta muy larga

const sistarc = require('fs');

const requestHandler = (req, res)=> {
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
    res.write('<body>Tienes un mensaje enviado</body>')
    res.write('</html>');    
    res.end();
};

//module.exports = {requestHandler};

//ejemplo usando hardcode
/*
module.exports = {
    handler: requestHandler,
    someText: 'hard code text'
}
*/

//otra forma de hacer lo mismo:
/*
module.exports.handler = requestHandler;
module.exports.someText = 'hard code text';
*/
//y otro forma mas de hacer lo mismo:

exports.handler = requestHandler;
exports.someText = 'hard code text';

