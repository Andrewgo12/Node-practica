// --------------------------------------------------------------------------------------
// **1. Ejemplo básico de uso de .then()**
// En este ejemplo, usamos .then() para manejar una promesa resuelta correctamente.
// --------------------------------------------------------------------------------------
new Promise((resolve, reject) => resolve('¡Éxito!'))
    .then(result => {
        // **El valor de 'result' es lo que se pasa a través de la promesa resuelta.**
        console.log(`Resultado recibido: ${result}`); // Se imprime: Resultado recibido: ¡Éxito!
    });

// --------------------------------------------------------------------------------------
// **2. Encadenamiento de múltiples .then()**
// Este ejemplo muestra cómo encadenar múltiples .then() para manejar valores secuenciales.
// --------------------------------------------------------------------------------------
new Promise((resolve, reject) => resolve(5))
    .then(number => {
        // **El primer .then() recibe 5 como el valor resuelto de la promesa.**
        console.log(`Número inicial: ${number}`);
        return number * 2;  // Retorna un nuevo valor para el siguiente .then()
    })
    .then(result => {
        // **El segundo .then() recibe el nuevo valor (5 * 2 = 10)**
        console.log(`Resultado final: ${result}`);
    });

// --------------------------------------------------------------------------------------
// **3. Manejo de errores con .then()**
// Aunque el manejo de errores generalmente se hace con .catch(), se puede manejar dentro de un .then() también.
// --------------------------------------------------------------------------------------
new Promise((resolve, reject) => reject('Algo salió mal'))
    .then(
        result => {
            console.log(result); // Este bloque no se ejecutará.
        },
        error => {
            // **Este bloque captura el error y lo maneja dentro del .then()**
            console.error(`Error capturado dentro del .then(): ${error}`);
        }
    );

// --------------------------------------------------------------------------------------
// **4. Utilizar .then() con datos transformados**
// En este ejemplo, usamos .then() para modificar el valor de la promesa resuelta antes de pasarlo a otro bloque.
// --------------------------------------------------------------------------------------
new Promise((resolve, reject) => resolve(10))
    .then(value => {
        // **El valor resuelto es transformado dentro del .then()**
        return value * 3;
    })
    .then(result => {
        // **El valor transformado es pasado a este bloque**
        console.log(`Valor transformado: ${result}`); // Resultado: 30
    });

// --------------------------------------------------------------------------------------
// **5. Cadena de promesas con valores secuenciales**
// Aquí cada .then() recibe un valor y lo pasa al siguiente .then(), formando una secuencia.
// --------------------------------------------------------------------------------------
new Promise((resolve, reject) => resolve(2))
    .then(result => {
        // **El primer .then() recibe el valor 2**
        return result + 3;
    })
    .then(result => {
        // **El segundo .then() recibe el valor 5 (2 + 3)**
        return result * 4;
    })
    .then(result => {
        // **El tercer .then() recibe el valor 20 (5 * 4)**
        console.log(`Resultado final: ${result}`); // Resultado: 20
    });

// --------------------------------------------------------------------------------------
// **6. Usar .then() para ejecutar funciones asincrónicas**
// Este ejemplo muestra cómo ejecutar una función asincrónica dentro de un .then().
// --------------------------------------------------------------------------------------
function cargarDatos() {
    return new Promise((resolve) => setTimeout(() => resolve('Datos cargados'), 1000));
}

cargarDatos()
    .then(datos => {
        // **Se ejecuta después de que la promesa se resuelve (después de 1 segundo)**
        console.log(datos); // Imprime: Datos cargados
    });

// --------------------------------------------------------------------------------------
// **7. .then() con valores de retorno**
// Si .then() devuelve un valor, ese valor se pasa a la siguiente promesa o .then() en la cadena.
// --------------------------------------------------------------------------------------
new Promise((resolve, reject) => resolve(100))
    .then(value => {
        // **El valor se retorna al siguiente .then()**
        return value + 50;
    })
    .then(result => {
        // **El siguiente .then() recibe el valor retornado (150)**
        console.log(result); // Imprime: 150
    });

// --------------------------------------------------------------------------------------
// **8. .then() con promesas anidadas**
// Este ejemplo muestra cómo anidar promesas dentro de un .then(), devolviendo una nueva promesa.
// --------------------------------------------------------------------------------------
new Promise((resolve, reject) => resolve('Iniciando'))
    .then(result => {
        // **Dentro del primer .then(), devolvemos una nueva promesa.**
        console.log(result); // Imprime: Iniciando
        return new Promise((resolve) => setTimeout(() => resolve('Promesa anidada resuelta'), 2000));
    })
    .then(result => {
        // **El segundo .then() recibe el valor resuelto de la promesa anidada.**
        console.log(result); // Imprime: Promesa anidada resuelta
    });

// --------------------------------------------------------------------------------------
// **9. Manejo de múltiples resultados en cadena**
// En este ejemplo, podemos manejar múltiples resultados usando múltiples .then() en cadena.
// --------------------------------------------------------------------------------------
new Promise((resolve, reject) => resolve('Mensaje inicial'))
    .then(result => {
        // **El primer .then() maneja el mensaje inicial**
        console.log(result); // Imprime: Mensaje inicial
        return 'Mensaje transformado';
    })
    .then(result => {
        // **El segundo .then() maneja el valor transformado**
        console.log(result); // Imprime: Mensaje transformado
        return 'Mensaje final';
    })
    .then(result => {
        // **El tercer .then() maneja el mensaje final**
        console.log(result); // Imprime: Mensaje final
    });

// --------------------------------------------------------------------------------------
// **10. .then() con valores dependientes**
// Este ejemplo demuestra cómo se pueden hacer cálculos con valores secuenciales pasados entre los .then().
// --------------------------------------------------------------------------------------
new Promise((resolve, reject) => resolve(5))
    .then(value => {
        // **Este .then() maneja el valor 5 y lo suma con 10**
        return value + 10;
    })
    .then(result => {
        // **El siguiente .then() toma el valor 15 y lo multiplica por 2**
        return result * 2;
    })
    .then(finalResult => {
        // **Finalmente, el valor 30 es impreso en consola.**
        console.log(`Resultado final: ${finalResult}`); // Imprime: Resultado final: 30
    });

// --------------------------------------------------------------------------------------
// **11. .then() con valores dentro de un objeto**
// Este ejemplo usa .then() para acceder a propiedades dentro de un objeto resuelto por la promesa.
// --------------------------------------------------------------------------------------
new Promise((resolve, reject) => resolve({ nombre: 'Juan', edad: 25 }))
    .then(obj => {
        // **El valor resuelto es un objeto, al que se accede dentro del .then()**
        console.log(`Nombre: ${obj.nombre}`); // Imprime: Nombre: Juan
        return obj.edad; // Retorna la propiedad 'edad'
    })
    .then(edad => {
        // **El siguiente .then() recibe el valor 25**
        console.log(`Edad: ${edad}`); // Imprime: Edad: 25
    });

// --------------------------------------------------------------------------------------
// **12. .then() con un retraso simulado**
// Este ejemplo simula un retraso con setTimeout antes de ejecutar el .then().
// --------------------------------------------------------------------------------------
new Promise((resolve, reject) => {
    setTimeout(() => resolve('Operación completada'), 2000);
})
    .then(result => {
        // **El .then() se ejecuta después de 2 segundos.**
        console.log(result); // Imprime: Operación completada
    });

// --------------------------------------------------------------------------------------
// **13. .then() para manejar operaciones asincrónicas encadenadas**
// Encadenamos varias promesas que realizan operaciones asincrónicas una tras otra.
// --------------------------------------------------------------------------------------
function operacionAsincronica() {
    return new Promise((resolve) => setTimeout(() => resolve('Operación completada'), 1000));
}

operacionAsincronica()
    .then(result => {
        // **Operación asincrónica 1 completada**
        console.log(result); // Imprime: Operación completada
        return operacionAsincronica();
    })
    .then(result => {
        // **Operación asincrónica 2 completada**
        console.log(result); // Imprime: Operación completada
    });

// --------------------------------------------------------------------------------------
// **14. .then() con valores no resueltos**
// En este ejemplo, mostramos cómo manejar una promesa que nunca se resuelve en el .then().
// --------------------------------------------------------------------------------------
new Promise((_, reject) => setTimeout(() => reject('Promesa no resuelta'), 3000))
    .then(
        result => {
            // Este bloque no se ejecutará.
        },
        error => {
            // **El .catch() maneja el error aquí.**
            console.log(`Error: ${error}`); // Imprime: Error: Promesa no resuelta
        }
    );

// --------------------------------------------------------------------------------------
// **15. .then() con múltiples valores simultáneos**
// Manejar múltiples promesas a la vez con .then() usando Promise.all().
// --------------------------------------------------------------------------------------
Promise.all([Promise.resolve(10), Promise.resolve(20)])
    .then(([a, b]) => {
        console.log(`Primer valor: ${a}`); // Imprime: Primer valor: 10
        console.log(`Segundo valor: ${b}`); // Imprime: Segundo valor: 20
    });
