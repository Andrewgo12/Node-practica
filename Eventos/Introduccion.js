// Importamos la clase EventEmitter del módulo 'events' de Node.js
const EventEmitter = require('events');

// Creamos una instancia de EventEmitter
const eventEmitter = new EventEmitter();

// ----------- Métodos de la clase EventEmitter -----------

// 1. **on(eventName, listener)**
// Este método permite suscribirse a un evento específico. El 'listener' es la función que se ejecutará cuando se emita ese evento.
eventEmitter.on('evento', () => {
    console.log('Evento recibido');
});
eventEmitter.emit('evento');  // Salida: Evento recibido

// 2. **once(eventName, listener)**
// Similar a `on`, pero la diferencia es que este método permite escuchar el evento solo una vez. El listener se eliminará automáticamente después de ser ejecutado.
eventEmitter.once('eventoUnaVez', () => {
    console.log('Este evento se maneja solo una vez');
});
eventEmitter.emit('eventoUnaVez');  // Salida: Este evento se maneja solo una vez
eventEmitter.emit('eventoUnaVez');  // No saldrá nada

// 3. **emit(eventName, ...args)**
// Este método emite un evento específico. Se pueden pasar argumentos adicionales que serán enviados a los listeners.
eventEmitter.emit('evento', 'argumento');  // Salida: Evento recibido con argumento

// 4. **removeListener(eventName, listener)**
// Este método elimina un listener específico de un evento determinado. Solo eliminará el listener que coincida con la función proporcionada.
const saludo = () => console.log('Hola');
eventEmitter.on('saludo', saludo);
eventEmitter.emit('saludo');  // Salida: Hola
eventEmitter.removeListener('saludo', saludo);
eventEmitter.emit('saludo');  // No saldrá nada

// 5. **removeAllListeners([eventName])**
// Este método elimina todos los listeners asociados a un evento específico. Si no se pasa un nombre de evento, elimina todos los listeners de todos los eventos.
eventEmitter.removeAllListeners('evento');

// 6. **setMaxListeners(n)**
// Establece el número máximo de listeners permitidos por evento. El valor predeterminado es 10.
eventEmitter.setMaxListeners(20);

// 7. **listenerCount(eventName)**
// Retorna el número de listeners registrados para un evento específico.
console.log(eventEmitter.listenerCount('evento'));  // Salida: Número de listeners para el evento 'evento'

// 8. **eventNames()**
// Devuelve un array con todos los nombres de eventos que tienen al menos un listener.
console.log(eventEmitter.eventNames());  // Salida: Array con los nombres de los eventos registrados

// 9. **getMaxListeners()**
// Retorna el número máximo de listeners permitidos, que es configurado por `setMaxListeners`.
console.log(eventEmitter.getMaxListeners());  // Salida: 20

// ----------- Métodos de manejo de errores -----------

// 10. **emit(eventName, ...args)**
// Este método también se utiliza para emitir eventos de error. Cuando se emite un evento `error`, Node.js lanza una excepción si no hay listeners registrados para ese evento.
eventEmitter.emit('error', new Error('¡Algo salió mal!'));  // Lanza una excepción si no hay listeners de error

// 11. **on('error', listener)**
// Se utiliza para manejar eventos `error` de manera segura. Si no se escucha este tipo de evento, se lanzará una excepción.
eventEmitter.on('error', (err) => {
    console.error(`Ocurrió un error: ${err.message}`);
});

// ----------- Métodos de manejo de listas de eventos -----------

// 12. **prependListener(eventName, listener)**
// Similar a `on`, pero agrega el listener al principio de la lista de listeners del evento, en lugar de al final.
eventEmitter.prependListener('evento', () => {
    console.log('Este listener es el primero');
});
eventEmitter.on('evento', () => {
    console.log('Este listener es el segundo');
});
eventEmitter.emit('evento');
// Salida esperada:
// Este listener es el primero
// Este listener es el segundo

// 13. **prependOnceListener(eventName, listener)**
// Similar a `once`, pero agrega el listener al principio de la lista de listeners.
eventEmitter.prependOnceListener('eventoUnaVez', () => {
    console.log('Este es el primer y único listener');
});
eventEmitter.emit('eventoUnaVez');  // Salida: Este es el primer y único listener
eventEmitter.emit('eventoUnaVez');  // No saldrá nada

// 14. **listeners(eventName)**
// Devuelve una lista de todos los listeners registrados para un evento específico.
const listeners = eventEmitter.listeners('evento');
console.log(listeners);  // Muestra todos los listeners para 'evento'

// 15. **rawListeners(eventName)**
// Similar a `listeners`, pero devuelve una lista de los listeners *sin envolver* en las funciones de Node.js (útil en situaciones avanzadas).
console.log(eventEmitter.rawListeners('evento'));  // Muestra los listeners sin envoltorios

// ----------- Propiedades de la clase EventEmitter -----------

// 16. **maxListeners**
// Esta propiedad es utilizada internamente para determinar el número máximo de listeners permitidos por evento.
eventEmitter.maxListeners = 15;  // Establece el límite máximo de listeners a 15
console.log(eventEmitter.maxListeners);  // Salida esperada: 15

// ----------- Otros métodos y características -----------

// 17. **emitAsync(eventName, ...args)**
// Este método no es parte de la API oficial de Node.js, pero es una función asincrónica personalizada que permite emitir un evento de forma asincrónica.
async function emitAsync(eventName, ...args) {
    await eventEmitter.emit(eventName, ...args);
}

// 18. **listenerCount(type)**
// Similar a `listenerCount` pero acepta un nombre de tipo de listener específico (por ejemplo, 'once', 'on').
console.log(eventEmitter.listenerCount('on'));  // Salida: Número de listeners registrados con 'on'

// 19. **getListeners(eventName)**
// Devuelve todos los listeners asociados a un evento específico. Equivalente a `listeners()`.
console.log(eventEmitter.getListeners('evento'));

// 20. **eventNames()**
// Lista los nombres de todos los eventos registrados en el objeto `EventEmitter`.
console.log(eventEmitter.eventNames());  // Devuelve todos los nombres de los eventos

