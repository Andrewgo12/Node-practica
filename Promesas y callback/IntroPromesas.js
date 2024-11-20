// 1. Promesa básica
const promesa = new Promise((resolve, reject) => {
    const exito = true;
    exito ? resolve('Todo bien') : reject('Algo salió mal');
});

promesa.then(console.log).catch(console.error);

// 2. Promesa con setTimeout
const espera = new Promise((resolve) =>
    setTimeout(() => resolve('Listo después de 2 segundos'), 2000)
);
espera.then(console.log);

// 3. Encadenamiento
function paso1() {
    return Promise.resolve('Paso 1 completado');
}

function paso2() {
    return Promise.resolve('Paso 2 completado');
}

paso1().then(paso2).then(console.log);

// 4. Rechazo explícito
Promise.reject('Algo falló').catch(console.error);

// 5. Promesa con manejo condicional
function verificarNumero(num) {
    return new Promise((resolve, reject) => {
        num > 0 ? resolve('Número válido') : reject('Número inválido');
    });
}

verificarNumero(5).then(console.log).catch(console.error);

// 6. Promise.all
const promesas = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];
Promise.all(promesas).then(console.log);

// 7. Promise.race
const tareas = [
    new Promise((resolve) => setTimeout(() => resolve('Tarea 1'), 1000)),
    new Promise((resolve) => setTimeout(() => resolve('Tarea 2'), 500)),
];
Promise.race(tareas).then(console.log);

// 8. Encadenar múltiples then
Promise.resolve(1)
    .then((n) => n + 1)
    .then((n) => n * 2)
    .then(console.log);

// 9. Catch final
Promise.reject('Error inicial')
    .catch((err) => `Recuperado: ${err}`)
    .then(console.log);

// 10. Promesa anidada
Promise.resolve('Inicio')
    .then((msg) =>
        Promise.resolve(`${msg} -> Segundo paso`).then(console.log)
    )
    .catch(console.error);

// Más ejemplos con variaciones avanzadas y contextos reales...
// 11. Encapsular operaciones con promesas
const multiplicar = (a, b) =>
    new Promise((resolve) => resolve(a * b));

multiplicar(5, 3).then(console.log);

// 12. Simulación de API
function obtenerUsuarioAPI(id) {
    return new Promise((resolve) =>
        setTimeout(() => resolve({ id, nombre: 'Usuario' }), 1000)
    );
}

obtenerUsuarioAPI(1).then(console.log);

// 13. Reintento automático
function reintentar(promesa, intentos = 3) {
    return promesa().catch((err) =>
        intentos > 0 ? reintentar(promesa, intentos - 1) : Promise.reject(err)
    );
}

reintentar(() => Promise.reject('Error'), 2).catch(console.error);
