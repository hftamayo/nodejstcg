const sistarc = require('fs');

const requestHandler = (req, res)=> {
    const url = req.url;
    const metodo = req.method;
    if(url === "/"){
        res.write('<html>');
        res.write('<head><title>Primer Quiz NodeJS </title></head>');
        res.write('<body><h1>Lista de Transferibles del Barcelona 20-21:</h1>');
        res.write('<ul><li>Luis Suarez</li><li>Mousa Wagge</li><li>Rafinha</li></ul>');
        res.write('<form action="/nuevotransfer" method="POST">');
        res.write('<input type="text" name="txtntransfer">');
        res.write('<button type="submit">Enviar</button></form></body>');
        res.write('</html>');    
        return res.end();    
    }
    if(url === "/nuevotransfer" && metodo==='POST'){
        //esta funcion obtiene toda la data enviada
        const body = [];
        req.on('data', (chunk) => {
            //console.log(chunk);
            body.push(chunk);
        });
        
        req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            const nuevoJugador = parseBody.split('=')[1];
            console.log(nuevoJugador);
            /*
            sistarc.writeFile("mensaje.txt", message, (err) => {
                res.statusCode = 302; //este codigo significa redireccion
                res.setHeader('Location', '/');
                return res.end();        
            });
            */
        }); //fin de el request end
        
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Nuevo Transfer</title></head>');
    res.write('<body><h3>El nuevo transfer fue registrado</h3>')
    res.write('<a href="/">Regresar</a>');
    res.write('</html>');    
    res.end();
};

exports.handler = requestHandler;
//exports.nuevoTransfer = 'hard code text';

