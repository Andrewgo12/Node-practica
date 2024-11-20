// 🔹 Introducción a Node.js

// 00:01:23 - Introducción a Node.js
// Node.js es un entorno de ejecución de JavaScript en el servidor, basado en el motor V8 de Google Chrome.
// Permite ejecutar código JavaScript fuera de un navegador.

// 00:07:24 - Conceptos básicos
// Node.js utiliza un modelo de E/S no bloqueante y orientado a eventos, ideal para aplicaciones escalables.
// Ejemplo: un servidor web simple.
const http = require('http');
const servidor = http.createServer((req, res) => {
    res.write('Hola desde el servidor Node.js!');
    res.end();
});
servidor.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});

// 00:16:29 - Aplicaciones de Node.js
// Node.js se usa para crear aplicaciones web, servidores, aplicaciones de tiempo real, APIs, y más.

// 00:21:01 - Descargar e instalar Node.js
// Puedes descargar Node.js desde su página oficial: https://nodejs.org/
// Instálalo y verifica la instalación con:
// node -v   // Verifica la versión de Node.js
// npm -v    // Verifica la versión de npm (Node Package Manager)

// 00:24:34 - Confirmar versión de Node.js
console.log("Versión de Node.js:", process.version);

// 00:26:35 - El REPL de Node.js
// El REPL (Read-Eval-Print Loop) permite ejecutar código JavaScript de manera interactiva.
// Puedes abrir el REPL ejecutando "node" en la terminal, luego escribir comandos directamente.

// 🔹 Módulos de Node.js y primer programa

// 00:31:02 - Primer programa con Node.js
console.log("¡Hola Mundo desde Node.js!");

// 00:34:38 - Módulos en Node.js
// Los módulos son bloques de código reutilizables. Node.js tiene muchos módulos integrados como `http`, `fs`, `os`, etc.
// Puedes crear tu propio módulo para organizar mejor tu código.

// 00:37:47 - Crear un módulo
// Vamos a crear un módulo que devuelva un saludo.
function saludar(nombre) {
    return `Hola, ${nombre}!`;
}
module.exports = saludar;

// 00:40:28 - Exportar e importar
// Exportamos la función 'saludar' y la importamos en otro archivo.

const saludo = require('./saludo');
console.log(saludo("Kevin"));

// 00:51:07 - Exportar varios elementos
// Se pueden exportar múltiples funciones desde un módulo.
function despedir(nombre) {
    return `Adiós, ${nombre}!`;
}

module.exports = { saludar, despedir };

// 00:58:05 - Sintaxis de desestructuración y require
// Podemos usar desestructuración para importar solo lo que necesitamos de un módulo.
const { saludar, despedir } = require('./saludo');
console.log(saludar("Loren"));
console.log(despedir("Kevin"));

// 01:01:49 - Módulos principales de Node.js

// 01:03:27 - El módulo console
// Node.js tiene el módulo `console` para imprimir mensajes en la consola.
console.log("Esto es un mensaje de log.");
console.error("Esto es un mensaje de error.");
console.warn("Esto es una advertencia.");

// 01:08:54 - El módulo process
// El módulo `process` proporciona información sobre el proceso actual de Node.js.
console.log("Proceso ID:", process.pid);
console.log("Directorio de trabajo actual:", process.cwd());

// 01:16:48 - El módulo os
// El módulo `os` proporciona información sobre el sistema operativo.
const os = require('os');
console.log("Plataforma:", os.platform());
console.log("Memoria libre:", os.freemem() / 1024 / 1024, "MB");

// 01:21:05 - El módulo Timers
// El módulo `Timers` se usa para manejar tiempos de ejecución, como setTimeout y setInterval.
setTimeout(() => {
    console.log("Este mensaje se muestra después de 2 segundos.");
}, 2000);

setInterval(() => {
    console.log("Este mensaje se muestra cada 3 segundos.");
}, 3000);

// 01:39:21 - El módulo fs
// El módulo `fs` permite interactuar con el sistema de archivos.
const fs = require('fs');

// 01:39:21 - Leer archivo
fs.readFile('archivo.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error al leer el archivo:", err);
    } else {
        console.log("Contenido del archivo:", data);
    }
});

// 01:39:21 - Escribir archivo
fs.writeFile('archivo.txt', 'Nuevo contenido en el archivo.', (err) => {
    if (err) {
        console.error("Error al escribir en el archivo:", err);
    } else {
        console.log("Archivo escrito correctamente");
    }
});

// 🔹 npm y el formato JSON

// 02:10:38 - Introducción a npm
// npm (Node Package Manager) es una herramienta que facilita la gestión de dependencias en proyectos Node.js.
// Puedes instalar paquetes con npm, como `express` o `lodash`.

console.log("Usando npm para manejar dependencias.");

// 02:16:09 - Crear paquete con npm
// Ejecuta el siguiente comando en la terminal para crear un nuevo proyecto con npm:
// npm init -y  // Esto creará un archivo package.json con la configuración predeterminada.

// 02:25:05 - Introducción al formato JSON
// JSON (JavaScript Object Notation) es un formato ligero para almacenar y transportar datos.
// Aquí hay un ejemplo de un objeto JSON:
const objetoJSON = '{"nombre": "Kevin", "edad": 21}';
const objeto = JSON.parse(objetoJSON);
console.log(objeto);

// 02:43:14 - Instalar y desinstalar paquetes con npm
// Puedes instalar paquetes con:
// npm install express
// Para desinstalar un paquete:
// npm uninstall express

// 🔹 Eventos y JavaScript asíncrono

// 03:00:11 - Eventos en Node.js
// Node.js está basado en un modelo orientado a eventos, lo que permite manejar múltiples solicitudes de manera eficiente.
const EventEmitter = require('events');
const emisor = new EventEmitter();

// 03:07:27 - Módulo events
// Creamos un evento personalizado.
emisor.on('saludo', () => {
    console.log('¡Hola desde el evento!');
});

emisor.emit('saludo');

// 03:16:06 - Promesas en JavaScript
// Las promesas en JavaScript permiten manejar operaciones asíncronas de manera más sencilla.
const promesa = new Promise((resolve, reject) => {
    const exito = true;
    if (exito) {
        resolve("Operación exitosa");
    } else {
        reject("Hubo un error");
    }
});

promesa.then(result => console.log(result)).catch(error => console.log(error));

// 03:40:26 - .catch()
// El método `.catch()` se usa para manejar errores en una promesa.
promesa.catch(error => console.log(error));

// 03:44:09 - Encadenar promesas y async/await
// Podemos encadenar promesas y usar `async/await` para escribir código más limpio.
async function ejecutar() {
    try {
        let resultado = await promesa;
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}

ejecutar();

// 🔹 HTTP y rutas en Node.js

// 04:13:17 - Modelo cliente-servidor
// Node.js es perfecto para crear servidores HTTP debido a su enfoque en eventos.

const httpServidor = require('http');
httpServidor.createServer((req, res) => {
    res.write("Respuesta desde el servidor HTTP");
    res.end();
}).listen(3000, () => {
    console.log("Servidor HTTP en el puerto 3000");
});

// 04:16:14 - Solicitudes HTTP
// Las solicitudes HTTP pueden ser GET, POST, PUT, DELETE, entre otras.

const url = require('url');
const servidorHTTP = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    res.write(`Ruta solicitada: ${parsedUrl.pathname}`);
    res.end();
});
servidorHTTP.listen(3000, () => {
    console.log("Servidor escuchando en el puerto 3000");
});
