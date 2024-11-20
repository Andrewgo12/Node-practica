const http = require(`http`);

const servidor = http.createServer((req, res) => {
    console.log(`===> req (Solicitud)`);
    console.log(req.url);
    console.log(req.method);
    
    res.end(`Presentacion inicial`);
});
const puerto = 3100;
servidor.listen(puerto, () => {
    console.log(`el servidor esta escuchando en el puerto ${puerto}`);
});