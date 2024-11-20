// Importar el módulo 'fs'
const fs = require('fs');

/* --------------------------------------------
   MÉTODOS PARA LEER ARCHIVOS
-------------------------------------------- */

// 1. Leer un archivo de manera asíncrona
fs.readFile('archivo.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(`Contenido del archivo: ${data}`);
});

// 2. Leer un archivo de manera síncrona
const contenido = fs.readFileSync('archivo.txt', 'utf8');
console.log(`Contenido del archivo (síncrono): ${contenido}`);

// 3. Crear un flujo de lectura desde un archivo
const readStream = fs.createReadStream('archivo.txt', { encoding: 'utf8' });
readStream.on('data', chunk => console.log(`Chunk recibido: ${chunk}`));

/* --------------------------------------------
   MÉTODOS PARA ESCRIBIR ARCHIVOS
-------------------------------------------- */

// 4. Escribir en un archivo de manera asíncrona
fs.writeFile('nuevoArchivo.txt', 'Contenido nuevo', 'utf8', err => {
    if (err) throw err;
    console.log('Archivo escrito exitosamente (asíncrono).');
});

// 5. Escribir en un archivo de manera síncrona
fs.writeFileSync('nuevoArchivoSync.txt', 'Contenido nuevo síncrono', 'utf8');
console.log('Archivo escrito exitosamente (síncrono).');

// 6. Crear un flujo de escritura hacia un archivo
const writeStream = fs.createWriteStream('archivoStream.txt');
writeStream.write('Primera línea del archivo.\n');
writeStream.end('Final del archivo.\n');

/* --------------------------------------------
   MÉTODOS PARA MANIPULAR ARCHIVOS Y DIRECTORIOS
-------------------------------------------- */

// 7. Renombrar un archivo
fs.rename('nuevoArchivo.txt', 'archivoRenombrado.txt', err => {
    if (err) throw err;
    console.log('Archivo renombrado exitosamente.');
});

// 8. Eliminar un archivo
fs.unlink('archivoRenombrado.txt', err => {
    if (err) throw err;
    console.log('Archivo eliminado exitosamente.');
});

// 9. Crear un directorio
fs.mkdir('nuevoDirectorio', { recursive: true }, err => {
    if (err) throw err;
    console.log('Directorio creado exitosamente.');
});

// 10. Eliminar un directorio
fs.rmdir('nuevoDirectorio', err => {
    if (err) throw err;
    console.log('Directorio eliminado exitosamente.');
});

// 11. Leer el contenido de un directorio
fs.readdir('.', (err, files) => {
    if (err) throw err;
    console.log('Contenido del directorio:', files);
});

// 12. Verificar si un archivo o directorio existe
fs.access('archivo.txt', fs.constants.F_OK, err => {
    console.log(err ? 'El archivo no existe' : 'El archivo existe');
});

/* --------------------------------------------
   MÉTODOS PARA ESTADÍSTICAS Y PERMISOS
-------------------------------------------- */

// 13. Obtener estadísticas de un archivo o directorio
fs.stat('archivo.txt', (err, stats) => {
    if (err) throw err;
    console.log('Estadísticas del archivo:', stats);
});

// 14. Cambiar permisos de un archivo
fs.chmod('archivo.txt', 0o644, err => {
    if (err) throw err;
    console.log('Permisos cambiados exitosamente.');
});

// 15. Cambiar el propietario de un archivo
fs.chown('archivo.txt', 1000, 1000, err => {
    if (err) throw err;
    console.log('Propietario cambiado exitosamente.');
});

/* --------------------------------------------
   MÉTODOS PARA ENLACES Y FLUJOS
-------------------------------------------- */

// 16. Crear un enlace simbólico
fs.symlink('archivo.txt', 'enlaceSimbolico.txt', err => {
    if (err) throw err;
    console.log('Enlace simbólico creado.');
});

// 17. Leer el destino de un enlace simbólico
fs.readlink('enlaceSimbolico.txt', (err, linkString) => {
    if (err) throw err;
    console.log(`El enlace apunta a: ${linkString}`);
});

// 18. Resolver un enlace simbólico
fs.realpath('enlaceSimbolico.txt', (err, resolvedPath) => {
    if (err) throw err;
    console.log(`Ruta resuelta: ${resolvedPath}`);
});

/* --------------------------------------------
   MÉTODOS ADICIONALES PARA MANEJO AVANZADO
-------------------------------------------- */

// 19. Copiar un archivo
fs.copyFile('archivo.txt', 'archivoCopiado.txt', err => {
    if (err) throw err;
    console.log('Archivo copiado exitosamente.');
});

// 20. Añadir datos a un archivo
fs.appendFile('archivo.txt', '\nLínea añadida.', err => {
    if (err) throw err;
    console.log('Datos añadidos al archivo.');
});

// 21. Truncar un archivo
fs.truncate('archivo.txt', 10, err => {
    if (err) throw err;
    console.log('Archivo truncado.');
});

// 22. Abrir un archivo para operaciones avanzadas
fs.open('archivo.txt', 'r', (err, fd) => {
    if (err) throw err;
    console.log(`Archivo abierto con file descriptor: ${fd}`);
    fs.close(fd, () => console.log('Archivo cerrado.'));
});

// 23. Monitorear cambios en un archivo
fs.watch('archivo.txt', (eventType, filename) => {
    console.log(`Evento detectado: ${eventType} en el archivo: ${filename}`);
});

// 24. Monitorear cambios en un directorio
fs.watch('.', (eventType, filename) => {
    console.log(`Evento detectado en el directorio: ${eventType}, archivo: ${filename}`);
});

/* --------------------------------------------
   FLUJOS AVANZADOS Y MANEJO DE DATOS
-------------------------------------------- */

// 25. Crear un flujo de lectura y escritura combinado
const duplexStream = fs.createReadStream('archivo.txt').pipe(fs.createWriteStream('archivoDuplicado.txt'));
duplexStream.on('finish', () => console.log('Flujo de datos terminado.'));
