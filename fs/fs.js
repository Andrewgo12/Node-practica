/*
* Curso de Node.js y Express.
* Creado para freeCodeCamp en Español.
* Por: Estefania Cassingena Navone.
*/

const fs = require('fs'); // Importar el módulo fs para manejar el sistema de archivos.

// -------------------------
// Versiones Asíncronas.
// -------------------------

console.log('Antes de leer el archivo...');

// Leer un archivo de forma asíncrona.
fs.readFile('index.html', 'utf-8', (err, contenido) => {
    if (err) {
        throw err; // Lanza un error si el archivo no existe o no se puede leer.
    }
    console.log(contenido); // Muestra el contenido del archivo en la consola.
});

console.log('Después de leer el archivo...');

// Cambiar el nombre de un archivo de forma asíncrona.
fs.rename('index.html', 'main.html', (err) => {
    if (err) {
        throw err; // Lanza un error si el archivo no existe o no se puede renombrar.
    }
    console.log('Nombre cambiado exitosamente.');
});

console.log('Después de cambiar el nombre del archivo...');

// Agregar contenido al final de un archivo (o crear uno nuevo si no existe).
fs.appendFile('index.html', '<p>Hola</p>', (err) => {
    if (err) {
        throw err; // Lanza un error si ocurre algún problema al escribir en el archivo.
    }
    console.log('Archivo actualizado');
});

console.log('Después de agregar contenido al archivo...');

// Reemplazar el contenido de un archivo por completo (o crear uno nuevo si no existe).
fs.writeFile('index.html', 'Contenido nuevo', (err) => {
    if (err) {
        throw err; // Lanza un error si no se puede escribir en el archivo.
    }
    console.log('Contenido reemplazado exitosamente.');
});

console.log('Después de reemplazar el contenido del archivo...');

// Eliminar un archivo.
fs.unlink('main.html', (err) => {
    if (err) {
        throw err; // Lanza un error si el archivo no existe o no se puede eliminar.
    }
    console.log('Archivo eliminado');
});



