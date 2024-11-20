// ---------------------- FUNCIONES DE TEMPORIZADORES Y EJECUCIÓN EN NODE.JS ----------------------

function Mostrartema(Tema) {
    console.log(`Estoy aprendiendo ${Tema}`);
}

// Usamos setTimeout para ejecutar la función Mostrartema después de 3 segundos
setTimeout(Mostrartema, 3000, "Node.js");

console.log(`antes del mensaje setinmediate()`);
setImmediate(TEMA, `node.js`)
console.log(`Despues del del mensaje setinmediate()`);
//
//
//
//


function sumar(a, b) {
    console.log(`La suma de ${a} y ${b} es: ${a + b}`);
}
setTimeout(sumar, 2000, 5, 10);
setInterval(sumar, 3000, 3, 4);

// 2. Multiplicar dos números después de un retraso
function multiplicar(a, b) {
    console.log(`El resultado de multiplicar ${a} por ${b} es: ${a * b}`);
}
setTimeout(multiplicar, 3000, 6, 7);


const { Console } = require('console');
// Importamos los temporizadores y funciones necesarias
const fs = require('fs');
const path = require('path');

// ===================================================================

// 1. **setTimeout()**: Ejecuta una función después de un tiempo específico (en milisegundos).
setTimeout(() => {
    console.log("Esto se ejecuta después de 2 segundos.");
}, 2000);

// ===================================================================

// 2. **setInterval()**: Ejecuta una función repetidamente con un intervalo de tiempo especificado (en milisegundos).
let count = 0;
const intervalId = setInterval(() => {
    console.log("Esto se repite cada 3 segundos.");
    count++;
    if (count === 3) {
        clearInterval(intervalId); // Detener el intervalo después de 3 ejecuciones
    }
}, 3000);

// ===================================================================

// 3. **setImmediate()**: Ejecuta una función inmediatamente después de que el ciclo de eventos actual termine.
setImmediate(() => {
    console.log("¡Este mensaje se ejecuta inmediatamente después de la operación actual!");
});

// ===================================================================

// 4. **clearTimeout()**: Cancela un `setTimeout()` antes de que se ejecute.
const timeoutId = setTimeout(() => {
    console.log("Este mensaje no se ejecutará.");
}, 5000);
clearTimeout(timeoutId);

// ===================================================================

// 5. **clearInterval()**: Cancela un `setInterval()` antes de que se ejecute nuevamente.
const intervalId2 = setInterval(() => {
    console.log("Este mensaje no se repetirá.");
}, 1000);
clearInterval(intervalId2);

// ===================================================================

// 6. **setTimeout() con parámetros**: Ejemplo de `setTimeout()` con parámetros.
setTimeout((name) => {
    console.log(`Hola, ${name}!`);
}, 2000, "Carlos");

// ===================================================================

// 7. **setInterval() con parámetros**: Ejemplo de `setInterval()` con parámetros.
let counter = 0;
const intervalId3 = setInterval((message) => {
    console.log(`${message} ${counter}`);
    counter++;
    if (counter === 5) {
        clearInterval(intervalId3); // Detener después de 5 repeticiones
    }
}, 1000, "Mensaje de repetición");

// ===================================================================

// 8. **setTimeout() con función anónima**: Ejecutar una función anónima después de un tiempo.
setTimeout(function () {
    console.log("Función anónima ejecutada después de 1 segundo.");
}, 1000);

// ===================================================================

// 9. **setInterval() con función anónima**: Ejecutar una función anónima repetidamente.
setInterval(function () {
    console.log("Esta función se ejecuta cada 2 segundos.");
}, 2000);

// ===================================================================

// 10. **setImmediate() dentro de `setTimeout()`**: Ejemplo de `setImmediate()` usado dentro de `setTimeout()`.
setTimeout(() => {
    console.log("Este mensaje se ejecuta después de 2 segundos.");
    setImmediate(() => {
        console.log("¡setImmediate() ejecutado después de setTimeout!");
    });
}, 2000);

// ===================================================================

// 11. **clearImmediate()**: Cancelar un `setImmediate()` antes de su ejecución.
const immediateId = setImmediate(() => {
    console.log("Este mensaje no se ejecutará.");
});
clearImmediate(immediateId);

// ===================================================================

// 12. **setInterval() con manejo de error**: Uso de `setInterval()` con manejo de errores.
let errorCount = 0;
const intervalId4 = setInterval(() => {
    try {
        if (errorCount === 3) throw new Error("Error después de 3 ejecuciones");
        console.log("Ejecutando...");
    } catch (err) {
        console.error(err.message);
        clearInterval(intervalId4); // Detener el intervalo al producirse el error
    }
    errorCount++;
}, 1000);

// ===================================================================

// 13. **setTimeout() con un ciclo de ejecución**: Ejecutar múltiples funciones en serie con `setTimeout()`.
setTimeout(() => {
    console.log("Paso 1");
    setTimeout(() => {
        console.log("Paso 2");
        setTimeout(() => {
            console.log("Paso 3");
        }, 1000);
    }, 1000);
}, 1000);

// ===================================================================

// 14. **setTimeout() usando funciones recursivas**: Repetir una tarea con `setTimeout()`.
const recursiveTimeout = (count) => {
    if (count <= 5) {
        console.log(`Repetición número: ${count}`);
        setTimeout(() => recursiveTimeout(count + 1), 2000);
    }
};
recursiveTimeout(1);

// ===================================================================

// 15. **setInterval() con función externa**: Ejecutar una función externa de manera repetitiva.
function printMessage() {
    console.log("¡Mensaje impreso cada 4 segundos!");
}
const intervalId5 = setInterval(printMessage, 4000);

// ===================================================================

// 16. **setImmediate() con función recursiva**: Ejemplo de `setImmediate()` con función recursiva.
function recursiveImmediate(count) {
    if (count <= 3) {
        setImmediate(() => {
            console.log(`Recursión número: ${count}`);
            recursiveImmediate(count + 1);
        });
    }
}
recursiveImmediate(1);

// ===================================================================

// 17. **setTimeout() con uso de `this`**: Usar el contexto de `this` dentro de `setTimeout()`.
const obj = {
    name: "Mi objeto",
    delayedMessage: function () {
        setTimeout(() => {
            console.log(`Hola desde ${this.name}`);
        }, 2000);
    }
};
obj.delayedMessage();

// ===================================================================

// 18. **setInterval() con `this`**: Ejemplo de `setInterval()` usando `this`.
const obj2 = {
    name: "Objeto con intervalo",
    counter: 0,
    startInterval: function () {
        setInterval(() => {
            console.log(`${this.name}: Repetición número ${this.counter}`);
            this.counter++;
        }, 1000);
    }
};
obj2.startInterval();

// ===================================================================

// 19. **clearInterval() dentro de una función de retardo**: Cancelar un intervalo con `setTimeout()`.
const intervalId6 = setInterval(() => {
    console.log("Esto debería ser cancelado después de 5 segundos.");
}, 1000);
setTimeout(() => clearInterval(intervalId6), 5000);

// ===================================================================

// 20. **setTimeout() con múltiples retrasos**: Ejecutar varias funciones con diferentes retrasos.
setTimeout(() => console.log("Primera función ejecutada."), 1000);
setTimeout(() => console.log("Segunda función ejecutada."), 2000);
setTimeout(() => console.log("Tercera función ejecutada."), 3000);

// ===================================================================

// 21. **setInterval() con múltiples retrasos**: Ejecutar múltiples tareas con un intervalo y diferentes retrasos.
setInterval(() => console.log("Cada 3 segundos."), 3000);
setTimeout(() => console.log("Después de 2 segundos"), 2000);

// ===================================================================

// 22. **setTimeout() con `arguments`**: Usar el objeto `arguments` para pasar parámetros.
setTimeout(function () {
    console.log("Parámetros: ", arguments);
}, 2000, "Hola", 123, true);

// ===================================================================

// 23. **setInterval() con `arguments`**: Usar el objeto `arguments` dentro de `setInterval()`.
let count2 = 0;
const intervalId7 = setInterval(function () {
    console.log(`Repetición ${arguments[0]} - ${arguments[1]}`);
    count2++;
    if (count2 === 2) {
        clearInterval(intervalId7);
    }
}, 2000, "Mensaje", 10);

// ===================================================================

// 24. **setTimeout() anidado con otras funciones asíncronas**: Encadenar múltiples acciones asíncronas.
setTimeout(() => {
    console.log("Primera acción");
    fs.readFile(path.join(__dirname, 'example.txt'), 'utf8', (err, data) => {
        console.log("Archivo leído");
    });
}, 1000);

// ===================================================================

// 25. **setImmediate() dentro de otros temporizadores**: Uso combinado de `setImmediate()` y otros temporizadores.
setTimeout(() => {
    setImmediate(() => {
        console.log("Ejecutado en setImmediate después de setTimeout");
    });
}, 500);

// ===================================================================

// 26. **Uso de promesas con `setTimeout()`**: Encadenar `setTimeout()` con promesas.
new Promise((resolve) => {
    setTimeout(() => resolve("Promesa resuelta después de 2 segundos"), 2000);
}).then((result) => console.log(result));

// ===================================================================

// 27. **setImmediate() dentro de `setTimeout()`**: Ejemplo de cómo usar ambos métodos para ejecutar tareas.
setTimeout(() => {
    console.log("setTimeout ejecutado");
    setImmediate(() => {
        console.log("setImmediate ejecutado inmediatamente después.");
    });
}, 1000);

// ===================================================================

// 28. **Reiniciar un `setInterval()`**: Reiniciar un temporizador repetitivo.
let count3 = 0;
const intervalId8 = setInterval(() => {
    if (count3 < 3) {
        console.log(`Contando: ${count3}`);
        count3++;
    } else {
        clearInterval(intervalId8);
        console.log("Intervalo detenido");
    }
}, 1000);
