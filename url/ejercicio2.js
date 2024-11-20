const chalk = require('chalk');

// Crear una nueva URL a partir de una cadena
const urlOriginal = new URL('https://www.ejemplo.com:8080/cursos?tema=programacion&nivel=avanzado');

// === MODIFICACIÓN DE LA URL ===

// Mostrar la URL original
console.log(chalk.green.bold('URL Original: ') + chalk.cyan(urlOriginal.toString())); // https://www.ejemplo.com:8080/cursos?tema=programacion&nivel=avanzado

// Modificar el protocolo
urlOriginal.protocol = 'http';
console.log(chalk.green.bold('Nuevo Protocolo: ') + chalk.cyan(urlOriginal.protocol)); // http:

// Modificar el hostname (dominio)
urlOriginal.hostname = 'www.nuevoweb.com';
console.log(chalk.green.bold('Nuevo Hostname: ') + chalk.cyan(urlOriginal.hostname)); // www.nuevoweb.com

// Modificar el puerto
urlOriginal.port = '3000';
console.log(chalk.green.bold('Nuevo Puerto: ') + chalk.cyan(urlOriginal.port)); // 3000

// Cambiar la ruta del pathname
urlOriginal.pathname = '/nuevo-curso';
console.log(chalk.green.bold('Nuevo Pathname: ') + chalk.cyan(urlOriginal.pathname)); // /nuevo-curso

// === PARÁMETROS DE CONSULTA ===

// Acceder a los parámetros de búsqueda
const params = urlOriginal.searchParams;

// Obtener el valor de un parámetro específico
console.log(chalk.green.bold('Valor del parámetro "tema": ') + chalk.cyan(params.get('tema'))); // programacion

// Modificar un parámetro
params.set('nivel', 'intermedio');
console.log(chalk.green.bold('Nuevo valor del parámetro "nivel": ') + chalk.cyan(params.get('nivel'))); // intermedio

// Agregar un nuevo parámetro
params.append('idioma', 'es');
console.log(chalk.green.bold('Nuevo parámetro "idioma": ') + chalk.cyan(params.get('idioma'))); // es

// Eliminar un parámetro
params.delete('tema');
console.log(chalk.green.bold('Parámetro "tema" eliminado: ') + chalk.cyan(params.get('tema') || 'No existe')); // No existe

// Mostrar la URL modificada
console.log(chalk.green.bold('URL Final Modificada: ') + chalk.cyan(urlOriginal.toString()));
