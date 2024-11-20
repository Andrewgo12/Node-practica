// Importamos el módulo 'url'
const url = require('url');

// URL de ejemplo que vamos a analizar y manipular
const urlEjemplo = 'https://www.ejemplo.com:8080/path/to/page?query1=valor1&query2=valor2#seccion';

// === 1. Análisis de una URL con `url.parse()` ===
const urlAnalizada = url.parse(urlEjemplo);

console.log('=== Análisis de la URL ===');
console.log('Protocolo:', urlAnalizada.protocol); // 'https:'
console.log('Host:', urlAnalizada.host); // 'www.ejemplo.com:8080'
console.log('Puerto:', urlAnalizada.port); // '8080'
console.log('Nombre de host:', urlAnalizada.hostname); // 'www.ejemplo.com'
console.log('Ruta:', urlAnalizada.pathname); // '/path/to/page'
console.log('Query:', urlAnalizada.query); // 'query1=valor1&query2=valor2'
console.log('Fragmento (hash):', urlAnalizada.hash); // '#seccion'
console.log('\n');

// === 2. Construcción de una URL con `url.format()` ===
const urlConstruida = url.format({
    protocol: 'https',
    hostname: 'www.miweb.com',
    port: 443,
    pathname: '/nuevo/recurso',
    query: { id: '123', nombre: 'ejemplo' },
    hash: '#final',
});

console.log('=== Construcción de una URL ===');
console.log('URL Construida:', urlConstruida); // 'https://www.miweb.com:443/nuevo/recurso?id=123&nombre=ejemplo#final'
console.log('\n');

// === 3. Resolución de rutas relativas con `url.resolve()` ===
const baseUrl = 'https://www.ejemplo.com/directorio/';
const rutaRelativa = 'otra-pagina.html';

const urlResuelta = url.resolve(baseUrl, rutaRelativa);

console.log('=== Resolución de URLs Relativas ===');
console.log('Base URL:', baseUrl);
console.log('Ruta Relativa:', rutaRelativa);
console.log('URL Resuelta:', urlResuelta); // 'https://www.ejemplo.com/directorio/otra-pagina.html'
console.log('\n');

// === 4. Manipulación moderna de URLs con el constructor `URL` ===
const miUrl = new URL(urlEjemplo);

console.log('=== Manipulación de la URL con el Constructor `URL` ===');
console.log('Protocolo:', miUrl.protocol); // 'https:'
console.log('Host:', miUrl.host); // 'www.ejemplo.com:8080'
console.log('Pathname:', miUrl.pathname); // '/path/to/page'
console.log('Search Params:', miUrl.searchParams.toString()); // 'query1=valor1&query2=valor2'
console.log('Hash:', miUrl.hash); // '#seccion'

// Manipular parámetros de consulta
miUrl.searchParams.append('query3', 'valor3'); // Agregamos un nuevo parámetro
miUrl.searchParams.set('query1', 'nuevoValor'); // Modificamos un parámetro existente
miUrl.searchParams.delete('query2'); // Eliminamos un parámetro

console.log('=== Parámetros de consulta actualizados ===');
console.log('URL Modificada:', miUrl.toString());
console.log('\n');

// === 5. Uso del constructor URL para rutas relativas ===
const relativaUrl = new URL('/nuevo/recurso', 'https://www.miweb.com/');

console.log('=== Uso de URL con rutas relativas ===');
console.log('URL Relativa:', relativaUrl.toString()); // 'https://www.miweb.com/nuevo/recurso'
console.log('\n');
