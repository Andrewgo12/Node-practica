// -----------------------------------------------------------------------------------
// El objeto `process` contiene información sobre el proceso en ejecución de Node.js.
// A continuación, se muestra cómo utilizar algunas de las propiedades y métodos más comunes de `process`.
// -----------------------------------------------------------------------------------

// 1. Imprimir el objeto `process`
console.log(process);
// Explicación: `process` es el objeto global en Node.js que contiene información y control sobre el proceso de ejecución.
// Incluye detalles sobre el entorno, la memoria, los argumentos de la línea de comandos y más.
// -----------------------------------------------------------------------------------

// 2. Imprimir las variables de entorno
console.log(process.env);
// Explicación: `process.env` es un objeto que contiene las variables de entorno del sistema operativo,
// como la configuración de las rutas o claves API. Nos permite acceder a configuraciones globales.
// -----------------------------------------------------------------------------------

// 3. Imprimir los argumentos de la línea de comandos
console.log(process.argv);
// Explicación: `process.argv` es un array que contiene los argumentos pasados al script de Node.js.
// Los primeros dos elementos son la ruta a Node.js y el archivo ejecutado, y los siguientes son los argumentos proporcionados por el usuario.
// -----------------------------------------------------------------------------------

// 4. Acceder al primer argumento
console.log(process.argv[2]);
// Explicación: `process.argv[2]` es el primer argumento pasado al script. Los dos primeros elementos son la ruta a Node.js y el archivo ejecutado.
// Este valor puede ser usado para pasar parámetros al script desde la terminal.
// -----------------------------------------------------------------------------------

// 5. Acceder al segundo argumento
console.log(process.argv[3]);
// Explicación: `process.argv[3]` es el segundo argumento pasado al script. Es útil cuando necesitas múltiples parámetros.
// -----------------------------------------------------------------------------------

// 6. Imprimir todos los argumentos proporcionados
for (let i = 2; i < process.argv.length; i++) {
    console.log(process.argv[i]);
}
// Explicación: Este bucle recorre todos los argumentos de la línea de comandos (exceptuando los primeros dos) e imprime cada uno.
// -----------------------------------------------------------------------------------

// 7. Imprimir la memoria usada por el proceso
console.log(process.memoryUsage());
// Explicación: `process.memoryUsage()` devuelve un objeto con las estadísticas de uso de memoria del proceso,
// que incluye la memoria total utilizada, la memoria usada por la pila, el heap, y más.
// -----------------------------------------------------------------------------------

// 8. Obtener el ID del proceso
console.log(process.pid);
// Explicación: `process.pid` devuelve el identificador único del proceso en ejecución. Esto es útil para monitoreo y administración de procesos.
// -----------------------------------------------------------------------------------

// 9. Obtener el directorio de trabajo actual
console.log(process.cwd());
// Explicación: `process.cwd()` devuelve el directorio de trabajo actual en el que se ejecuta el proceso de Node.js.
// Es útil para obtener la ruta desde la que se ejecuta el script.
// -----------------------------------------------------------------------------------

// 10. Cambiar el directorio de trabajo
// process.chdir('/ruta/a/nuevo/directorio');
// Explicación: `process.chdir()` permite cambiar el directorio de trabajo actual del proceso.
// Esto puede ser útil si deseas cambiar a otro directorio antes de realizar operaciones de lectura o escritura de archivos.
// -----------------------------------------------------------------------------------

// 11. Imprimir el tipo de plataforma
console.log(process.platform);
// Explicación: `process.platform` devuelve una cadena que indica el sistema operativo de la plataforma en la que se ejecuta Node.js.
// Puede ser 'win32', 'linux', 'darwin', etc.
// -----------------------------------------------------------------------------------

// 12. Verificar si el proceso está en modo de depuración
console.log(process.debugPort);
// Explicación: `process.debugPort` devuelve el número de puerto si el proceso está siendo depurado.
// Si el proceso no está siendo depurado, retorna undefined.
// -----------------------------------------------------------------------------------

// 13. Imprimir la versión de Node.js
console.log(process.version);
// Explicación: `process.version` devuelve la versión actual de Node.js que se está ejecutando. Es útil para verificar qué versión tienes instalada.
// -----------------------------------------------------------------------------------

// 14. Obtener las señales que el proceso puede manejar
console.log(process.signals);
// Explicación: `process.signals` nos da un objeto con las señales que el proceso puede manejar.
// Las señales incluyen eventos del sistema como SIGINT (Ctrl+C), SIGTERM (terminación del proceso), etc.
// -----------------------------------------------------------------------------------

// 15. Salir del proceso de Node.js
// process.exit(0);
// Explicación: `process.exit()` termina el proceso de Node.js de inmediato. El código proporcionado como argumento (0 para éxito, otro número para error) se pasa como estado de salida.
// -----------------------------------------------------------------------------------

// 16. Registrar cuando el proceso se cierra
process.on('exit', (code) => {
    console.log(`El proceso se ha cerrado con el código: ${code}`);
});
// Explicación: `process.on('exit', callback)` nos permite registrar una función de callback que se ejecutará cuando el proceso de Node.js termine.
// El código de salida se pasa como parámetro al callback.
// -----------------------------------------------------------------------------------

// 17. Manejo de señales como SIGINT (Ctrl+C)
process.on('SIGINT', () => {
    console.log('Se ha recibido una señal SIGINT (Ctrl+C).');
    process.exit();
});
// Explicación: `process.on('SIGINT', callback)` permite manejar señales de interrupción como Ctrl+C. Aquí estamos interceptando SIGINT y cerrando el proceso adecuadamente.
// -----------------------------------------------------------------------------------

// 18. Imprimir información sobre el sistema operativo
console.log(process.arch);
// Explicación: `process.arch` devuelve la arquitectura del sistema operativo, por ejemplo 'x64' o 'arm'.
// -----------------------------------------------------------------------------------

// 19. Imprimir las carpetas temporales del sistema
console.log(process.env.TEMP);
// Explicación: `process.env.TEMP` devuelve la ruta a la carpeta temporal del sistema operativo.
// -----------------------------------------------------------------------------------

