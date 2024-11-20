const http = require('http');

// Crear el servidor HTTP
const servidor = http.createServer((req, res) => {
  // Configurar encabezados de la respuesta
  res.setHeader('Content-Type', 'text/plain');

  // Configurar el estado de la respuesta
  res.statusCode = 200;

  // Enviar el mensaje de respuesta
  res.end('Hola, Mundo! Este es un servidor mejorado.');
});

// Puerto donde el servidor escuchará las solicitudes
const PUERTO = 3000;

// Iniciar el servidor y mostrar un mensaje en la consola
servidor.listen(PUERTO, () => {
  console.log(`El servidor está funcionando en http://localhost:${PUERTO}`);
});
