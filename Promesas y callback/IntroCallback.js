// 1. Callback básico
function ejemploCallback(mensaje, callback) {
    console.log(`Mensaje: ${mensaje}`);
    callback();
}

ejemploCallback('Hola', () => console.log('Callback ejecutado'));

// 2. Callback con múltiples parámetros
function suma(a, b, callback) {
    const resultado = a + b;
    callback(resultado);
}

suma(5, 3, (res) => console.log(`Resultado: ${res}`));

// 3. Callback con funciones anónimas
setTimeout(() => console.log('Hola después de 2 segundos'), 2000);

// 4. Encadenamiento de callbacks
function paso1(callback) {
    console.log('Paso 1');
    callback();
}

function paso2(callback) {
    console.log('Paso 2');
    callback();
}

function paso3(callback) {
    console.log('Paso 3');
    callback();
}

paso1(() => paso2(() => paso3(() => console.log('Finalizado'))));

// 5. Manejo de errores en callbacks
function dividir(a, b, callback) {
    if (b === 0) {
        callback('Error: División entre cero');
    } else {
        callback(null, a / b);
    }
}

dividir(10, 2, (err, res) => {
    if (err) {
        console.error(err);
    } else {
        console.log(`Resultado: ${res}`);
    }
});

// 6. Iterar con callbacks
[1, 2, 3, 4].forEach((num) => console.log(num * 2));

// 7. Callbacks con eventos personalizados
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('evento', (msg) => console.log(`Evento recibido: ${msg}`));
emitter.emit('evento', 'Hola mundo');

// 8. Paralelismo con callbacks
function operacionLarga(id, callback) {
    setTimeout(() => callback(`Operación ${id} completada`), id * 1000);
}

operacionLarga(1, console.log);
operacionLarga(2, console.log);
operacionLarga(3, console.log);

// 9. Control de flujo básico
function inicio(callback) {
    console.log('Inicio');
    callback();
}

function fin() {
    console.log('Fin');
}

inicio(fin);

// 10. Validación de datos con callbacks
function validarNumero(num, callback) {
    if (typeof num !== 'number') {
        callback('Error: No es un número');
    } else {
        callback(null, num * 2);
    }
}

validarNumero(10, (err, resultado) => {
    if (err) {
        console.error(err);
    } else {
        console.log(`Resultado: ${resultado}`);
    }
});

// Más ejemplos con otros enfoques de callbacks...
// 11. Uso con mapas
const nums = [1, 2, 3, 4];
const dobles = nums.map((n) => n * 2);
console.log(dobles);

// 12. Reducción
const sumaTotal = nums.reduce((acc, n) => acc + n, 0);
console.log(`Suma total: ${sumaTotal}`);

// 13. Filtrado
const pares = nums.filter((n) => n % 2 === 0);
console.log(`Números pares: ${pares}`);

// 14. Simulación de API con callback
function obtenerUsuario(id, callback) {
    setTimeout(() => callback({ id, nombre: 'Juan' }), 1000);
}

obtenerUsuario(1, (usuario) => console.log(usuario));

// 15. Reintento de operación
function reintentar(callback, intentos = 3) {
    let intentosActuales = 0;
    const intentar = () => {
        intentosActuales++;
        if (intentosActuales <= intentos) {
            console.log(`Intento ${intentosActuales}`);
            callback();
        } else {
            console.log('Se agotaron los intentos');
        }
    };

    intentar();
}

reintentar(() => console.log('Operación ejecutada'));
