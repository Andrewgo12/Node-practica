// Importamos el módulo `http` de Node.js
// Este módulo se utiliza para crear servidores HTTP básicos.
const http = require('http');

// Creamos el servidor HTTP utilizando `http.createServer()`
// Este método toma una función como argumento, que se ejecuta cada vez que llega una solicitud al servidor.
const servidor = http.createServer((req, res) => {
    // === req: Objeto de la solicitud ===
    // `req` (request) contiene toda la información relacionada con la solicitud HTTP hecha al servidor.
    console.log('Solicitud entrante:');
    console.log(`Método HTTP: ${req.method}`); // Ejemplo: 'GET', 'POST', etc.
    console.log(`URL solicitada: ${req.url}`); // La ruta solicitada por el cliente (Ejemplo: '/home').

    // === res: Objeto de la respuesta ===
    // `res` (response) se utiliza para enviar datos de vuelta al cliente.

    // Establecemos el estado de la respuesta HTTP.
    // `200` significa "OK" (éxito).
    res.statusCode = 200;

    // Especificamos los encabezados de la respuesta.
    // Aquí indicamos que vamos a devolver contenido de tipo HTML.
    res.setHeader('Content-Type', 'text/html');

    // Preparamos el contenido que será enviado al cliente.
    // En este caso, es una respuesta HTML básica.
    const contenido = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Servidor Node.js</title>
        </head>
        <body>
            <h1>¡Hola, Mundo!</h1>
            <p>Este es un servidor HTTP básico en Node.js.</p>
            <p>Ruta solicitada: ${req.url}</p>
            <p>Método utilizado: ${req.method}</p>
        </body>
        </html>
    `;

    // Enviamos el contenido al cliente y cerramos la respuesta.
    res.end(contenido);

    // Nota: `res.end()` finaliza el proceso de respuesta.
});

// Elegimos un puerto para que el servidor escuche las solicitudes.
// El puerto 3000 es común para aplicaciones en desarrollo.
const puerto = 3000;

// Ponemos el servidor en escucha utilizando `servidor.listen()`.
// Este método toma como argumento el número de puerto y una función de callback opcional.
servidor.listen(puerto, () => {
    console.log(`Servidor escuchando en el puerto ${puerto}`);
    console.log('Presiona Ctrl+C para detener el servidor.');
});
