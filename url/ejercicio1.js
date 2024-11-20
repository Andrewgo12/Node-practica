// Importamos el paquete 'chalk' para mejorar la visualización en consola.
const chalk = require('chalk');

// Creamos una instancia de URL
const Miurl = new URL('https://www.ejemplo.org/cursos/programacion?ordenar=vistas&nivel=1&categoria=desarrollo&autor=JohnDoe');

// === MÉTODOS BÁSICOS DE LA CLASE `URL` ===

// Mostramos el protocolo (http, https, etc.) con color verde
console.log(chalk.green.bold('Protocolo: ') + chalk.cyan(Miurl.protocol)); // Salida: https:

// Mostramos el hostname (dominio del sitio web) con color azul
console.log(chalk.green.bold('Hostname: ') + chalk.cyan(Miurl.hostname)); // Salida: www.ejemplo.org

// Mostramos el pathname (ruta después del dominio) con color amarillo
console.log(chalk.green.bold('Pathname: ') + chalk.yellow(Miurl.pathname)); // Salida: /cursos/programacion

// Mostramos el puerto (si se especifica en la URL) con color magenta
console.log(chalk.green.bold('Puerto: ') + chalk.magenta(Miurl.port || '(No especificado)')); // Salida: (vacío porque no se especifica)

// Mostramos los parámetros completos como una cadena con color rojo
console.log(chalk.green.bold('Parámetros de búsqueda: ') + chalk.red(Miurl.search)); // Salida: ?ordenar=vistas&nivel=1&categoria=desarrollo&autor=JohnDoe

// Fragmento (#hash) de la URL, si existe, con color gris
console.log(chalk.green.bold('Fragmento: ') + chalk.gray(Miurl.hash || '(No presente)')); // Salida: (vacío porque no hay fragmento en la URL)

// Mostramos la URL completa como una cadena, en color azul brillante
console.log(chalk.green.bold('URL completa: ') + chalk.blue(Miurl.toString())); // Salida: https://www.ejemplo.org/cursos/programacion?ordenar=vistas&nivel=1&categoria=desarrollo&autor=JohnDoe

// === MÉTODOS AVANZADOS CON URLSearchParams ===
const parametros = Miurl.searchParams;

// Mostrar todos los parámetros como un objeto iterable en color verde y amarillo
console.log(chalk.green.bold('Parámetros completos:'));
parametros.forEach((valor, clave) => {
    console.log(chalk.yellow.bold(`  ${clave}:`) + chalk.cyan(` ${valor}`));
});

// Obtener el valor de un parámetro específico, con color verde y azul
console.log(chalk.green.bold('Valor del parámetro "ordenar": ') + chalk.cyan(parametros.get('ordenar'))); // Salida: vistas
console.log(chalk.green.bold('Valor del parámetro "nivel": ') + chalk.cyan(parametros.get('nivel'))); // Salida: 1

// Verificar si existe un parámetro en la URL, en color rojo
console.log(chalk.green.bold('¿Existe el parámetro "categoria"? ') + chalk.red(parametros.has('categoria') ? 'Sí' : 'No')); // Salida: Sí
console.log(chalk.green.bold('¿Existe el parámetro "precio"? ') + chalk.red(parametros.has('precio') ? 'Sí' : 'No')); // Salida: No

// Obtener todos los valores de un parámetro (en caso de que haya repetidos).
parametros.append('nivel', '2'); // Agregamos un parámetro duplicado para demostrar.
console.log(chalk.green.bold('Todos los valores del parámetro "nivel": ') + chalk.cyan(parametros.getAll('nivel').join(', '))); // Salida: 1, 2

// Contar el número de parámetros en la URL con color azul claro
console.log(chalk.green.bold('Número de parámetros: ') + chalk.blue(parametros.toString().split('&').length)); // Salida: 5

// Agregar un nuevo parámetro y mostrar la URL actualizada con color verde y rojo
parametros.append('nuevoParametro', 'valorNuevo');
console.log(chalk.green.bold('URL después de agregar "nuevoParametro": ') + chalk.red(Miurl.toString())); // Incluye el nuevo parámetro

// Modificar un parámetro existente.
parametros.set('nivel', '3'); // Cambiamos el nivel a 3.
console.log(chalk.green.bold('URL después de modificar "nivel": ') + chalk.red(Miurl.toString())); // El valor de nivel ahora es 3.

// Eliminar un parámetro.
parametros.delete('autor'); // Eliminamos el parámetro "autor".
console.log(chalk.green.bold('URL después de eliminar "autor": ') + chalk.red(Miurl.toString())); // El parámetro "autor" ya no está en la URL.

// === CONSULTA Y VISUALIZACIÓN DIRECTA ===
const tieneParametro = parametros.has('categoria'); // Verificar si existe "categoria".
const valoresNivel = parametros.getAll('nivel'); // Obtener todos los valores de "nivel".

console.log(chalk.green.bold('Consulta directa: ¿Tiene "categoria"? ') + chalk.yellow(tieneParametro ? 'Sí' : 'No')); // true
console.log(chalk.green.bold('Consulta directa: Valores de "nivel": ') + chalk.cyan(valoresNivel.join(', '))); // ['3']

// === GENERAR UNA NUEVA URL CON BASE EN LOS PARÁMETROS ===
const nuevaUrl = new URL(Miurl.toString());
nuevaUrl.searchParams.set('idioma', 'es'); // Agregamos un parámetro "idioma".
console.log(chalk.green.bold('Nueva URL con "idioma": ') + chalk.magenta(nuevaUrl.toString())); // Nueva URL con "idioma" añadido
