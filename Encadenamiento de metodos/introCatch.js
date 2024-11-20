// --------------------------------------------------------------------------------------
// **1. Manejar errores genéricos**
// Este ejemplo captura un error genérico y lo maneja utilizando .catch.
// --------------------------------------------------------------------------------------
new Promise((_, reject) => reject('Algo salió mal'))
    .catch(error => {
        // **Captura el error y lo muestra en consola con un mensaje claro.**
        console.error(`Error genérico: ${error}`);
    });

// --------------------------------------------------------------------------------------
// **2. Registrar errores en un sistema externo**
// Aquí capturamos el error y lo enviamos a un sistema de log o a un servidor de monitoreo.
// --------------------------------------------------------------------------------------
new Promise((_, reject) => reject('Fallo crítico'))
    .catch(error => {
        // **Registro de error:**
        // En lugar de solo mostrarlo en consola, lo enviamos a un sistema de monitoreo.
        console.log(`Registrando error: ${error}`);
        // Aquí iría el código para enviar el error a un servidor o sistema externo.
    });

// --------------------------------------------------------------------------------------
// **3. Proveer valores por defecto**
// Si la promesa falla, podemos devolver un valor por defecto que se utiliza en el siguiente .then.
// --------------------------------------------------------------------------------------
new Promise((_, reject) => reject('Error inesperado'))
    .catch(error => {
        // **Mostramos el error en consola y retornamos un valor por defecto.**
        console.warn(`Error manejado: ${error}`);
        return 'Valor por defecto';  // **Valor de fallback en caso de error**
    })
    .then(valor => {
        // **Valor que es utilizado si la promesa falla.**
        console.log(`Continuando con: ${valor}`);
    });

// --------------------------------------------------------------------------------------
// **4. Rechazar con un error personalizado**
// Aquí lanzamos un error personalizado después de capturar el error original.
// --------------------------------------------------------------------------------------
new Promise((_, reject) => reject('Datos inválidos'))
    .catch(() => {
        // **Lanzamos un error específico de la aplicación.**
        throw new Error('Error específico de la aplicación');
    })
    .catch(error => {
        // **Capturamos el nuevo error personalizado y lo mostramos.**
        console.error(error.message);
    });

// --------------------------------------------------------------------------------------
// **5. Reintentar operación fallida**
// Este ejemplo muestra cómo intentar ejecutar una operación que falla, y reintentarla hasta un número máximo de intentos.
// --------------------------------------------------------------------------------------
let intentos = 0;
function tareaConReintentos() {
    return new Promise((_, reject) => reject('Intento fallido'))
        .catch(error => {
            // **Contamos cuántos intentos se han hecho y mostramos el error.**
            intentos++;
            console.log(`Intento ${intentos}: ${error}`);
            if (intentos < 3) {
                // **Si no hemos llegado al máximo de intentos, reintentamos.**
                return tareaConReintentos();
            } else {
                // **Si llegamos al máximo de intentos, lanzamos un error final.**
                throw new Error('Máximo de intentos alcanzado');
            }
        })
        .catch(error => console.log(error.message)); // **Capturamos el error final**
}

tareaConReintentos();

// --------------------------------------------------------------------------------------
// **6. Manejo de errores en cadenas de promesas**
// Este ejemplo maneja los errores en toda la cadena de promesas utilizando un único .catch al final.
// --------------------------------------------------------------------------------------
new Promise((resolve, reject) => reject('Error al hacer la solicitud'))
    .then(() => {
        // **Este bloque no se ejecutará porque la promesa se rechaza antes.**
        console.log('Operación exitosa');
    })
    .catch(error => {
        // **Captura cualquier error en la cadena de promesas.**
        console.log(`Error en la cadena de promesas: ${error}`);
    });

// --------------------------------------------------------------------------------------
// **7. Capturar errores asincrónicos en .then**
// Este ejemplo muestra cómo capturar errores en una promesa manejada dentro de un .then.
// --------------------------------------------------------------------------------------
new Promise((resolve, reject) => reject('Error en el primer paso'))
    .then(() => {
        // **Este bloque no se ejecutará porque la promesa se rechaza antes de entrar aquí.**
        console.log('Operación exitosa en el then');
    })
    .catch(error => {
        // **Captura el error que ocurrió en el .then y lo muestra en consola.**
        console.log(`Error en el then: ${error}`);
    });

// --------------------------------------------------------------------------------------
// **8. Encadenar múltiples .catch**
// Este ejemplo muestra cómo se pueden encadenar múltiples .catch para manejar diferentes tipos de errores.
// --------------------------------------------------------------------------------------
new Promise((resolve, reject) => reject('Error en la solicitud'))
    .catch(error => {
        // **Primera captura de error**
        console.log(`Primer catch: ${error}`);
        throw new Error('Error en la primera capa');
    })
    .catch(error => {
        // **Segunda captura de error**
        console.log(`Segundo catch: ${error.message}`);
    });

// --------------------------------------------------------------------------------------
// **9. Ignorar el error y continuar con la ejecución**
// A veces podemos elegir ignorar el error y continuar con el flujo de la aplicación.
// --------------------------------------------------------------------------------------
new Promise((_, reject) => reject('Algo salió mal'))
    .catch(error => {
        // **Ignorar el error y continuar sin hacer nada.**
        console.log('Error ocurrido, pero continuando con el flujo...');
        return 'Flujo continuado';
    })
    .then(valor => {
        // **Continuamos con el flujo después de ignorar el error.**
        console.log(valor);
    });

// --------------------------------------------------------------------------------------
// **10. Retornar una nueva promesa en .catch**
// Este ejemplo muestra cómo podemos devolver una nueva promesa en un .catch para manejar el error de manera asíncrona.
// --------------------------------------------------------------------------------------
new Promise((_, reject) => reject('Error al procesar'))
    .catch(error => {
        // **Devolvemos una nueva promesa para manejar el error de forma asíncrona.**
        console.log(`Error capturado: ${error}`);
        return new Promise((resolve) => resolve('Recuperado de error'));
    })
    .then(result => {
        // **El flujo continúa con el resultado de la nueva promesa.**
        console.log(result);
    });

// --------------------------------------------------------------------------------------
// **11. Realizar acciones luego de un error (finally)**
// Utilizando un bloque .finally para ejecutar una acción sin importar si la promesa fue resuelta o rechazada.
// --------------------------------------------------------------------------------------
new Promise((_, reject) => reject('Error final'))
    .catch(error => {
        // **Capturamos el error**
        console.log(`Error capturado: ${error}`);
    })
    .finally(() => {
        // **Acción final después de capturar el error (independientemente de si fue resuelto o rechazado)**
        console.log('Acción final después del error');
    });

// --------------------------------------------------------------------------------------
// **12. Manejo de errores con datos de entrada inválidos**
// Este ejemplo muestra cómo capturar un error causado por datos de entrada inválidos.
// --------------------------------------------------------------------------------------
function procesarDatos(data) {
    return new Promise((resolve, reject) => {
        if (!data) {
            reject('Datos inválidos');
        } else {
            resolve('Datos procesados');
        }
    });
}

procesarDatos(null)
    .catch(error => {
        // **Capturamos el error causado por datos inválidos**
        console.error(`Error: ${error}`);
    });

    