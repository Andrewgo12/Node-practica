const chalk = require('chalk');

// Crear una base de URL
const baseURL = new URL('https://www.misitio.com');

// === CREAR UNA URL RELATIVA ===

// Crear una URL relativa a partir de una URL base
const urlRelativa = new URL('/productos/cursos?categoria=tecnologia', baseURL);
console.log(chalk.green.bold('URL Relativa: ') + chalk.magenta(urlRelativa.toString()));
// https://www.misitio.com/productos/cursos?categoria=tecnologia

// === MODIFICAR RUTAS Y PARÁMETROS DINÁMICAMENTE ===

// Cambiar la ruta del pathname
urlRelativa.pathname = '/productos/nuevos-cursos';
console.log(chalk.green.bold('Ruta modificada: ') + chalk.magenta(urlRelativa.pathname)); // /productos/nuevos-cursos

// Cambiar los parámetros de búsqueda de manera dinámica
const paramsRelativa = urlRelativa.searchParams;

// Cambiar parámetros dinámicamente
const categoria = 'programacion';
const nivel = 'basico';
paramsRelativa.set('categoria', categoria);
paramsRelativa.set('nivel', nivel);

// Mostrar los parámetros dinámicos
console.log(chalk.green.bold('Parámetros modificados: '));
paramsRelativa.forEach((value, key) => {
    console.log(chalk.yellow.bold(`${key}:`) + chalk.cyan(` ${value}`));
});

// === CREACIÓN DE UNA URL CON VALORES INTERACTIVOS ===

// Función para crear una URL de búsqueda basada en entrada de usuario
function generarURLBusqueda(base, categoria, orden) {
    const nuevaURL = new URL('/buscar', base);
    nuevaURL.searchParams.set('categoria', categoria);
    nuevaURL.searchParams.set('orden', orden);
    return nuevaURL.toString();
}

const urlBusqueda = generarURLBusqueda(baseURL, 'libros', 'asc');
console.log(chalk.green.bold('URL Generada para búsqueda: ') + chalk.magenta(urlBusqueda));
// https://www.misitio.com/buscar?categoria=libros&orden=asc

// === COMPARACIÓN DE URLS ===

// Comparar si dos URLs son iguales
const urlComparar1 = new URL('https://www.misitio.com/productos/cursos?categoria=tecnologia&nivel=avanzado');
const urlComparar2 = new URL('https://www.misitio.com/productos/cursos?categoria=tecnologia&nivel=avanzado');
const sonIguales = urlComparar1.toString() === urlComparar2.toString();
console.log(chalk.green.bold('¿Las dos URLs son iguales? ') + chalk.red(sonIguales ? 'Sí' : 'No'));
