// ---------------------- MÓDULO 'os' DE NODE.JS ----------------------

// Importamos el módulo 'os' para obtener información sobre el sistema operativo.
const os = require('os');

// ===================================================================

// 1. **Tipo de sistema operativo**: Devuelve el tipo de sistema operativo.
console.log("Tipo de sistema operativo: ", os.type());
// Ejemplo de salida: 'Linux', 'Darwin' (para macOS), 'Windows_NT' (para Windows)

// ===================================================================

// 2. **Plataforma del sistema operativo**: Retorna la plataforma más detallada.
console.log("Plataforma del sistema operativo: ", os.platform());
// Ejemplo: 'linux', 'darwin', 'win32'

// ===================================================================

// 3. **Nombre de la máquina**: Obtiene el nombre de la máquina en la red.
console.log("Nombre de la máquina: ", os.hostname());
// Ejemplo: 'mi-maquina'

// ===================================================================

// 4. **Directorio Home del usuario**: Retorna el directorio home del usuario.
console.log("Directorio home del usuario: ", os.homedir());
// Ejemplo: '/home/usuario' en Linux, 'C:\\Users\\Usuario' en Windows

// ===================================================================

// 5. **Tiempo de actividad del sistema**: Muestra el tiempo que ha estado activo el sistema (en segundos).
console.log("Tiempo de actividad del sistema (segundos): ", os.uptime());
// Ejemplo: 1293841 segundos

// ===================================================================

// 6. **Información del usuario**: Obtiene información sobre el usuario actual.
console.log("Información del usuario: ", os.userInfo());
// Ejemplo de salida:
// {
//   uid: 1000,
//   gid: 1000,
//   username: 'usuario',
//   homedir: '/home/usuario',
//   shell: '/bin/bash'
// }

// ===================================================================

// 7. **Arquitectura del CPU**: Devuelve la arquitectura del procesador ('x64', 'arm', etc.).
console.log("Arquitectura del CPU: ", os.arch());
// Ejemplo: 'x64'

// ===================================================================

// 8. **Detalles de los núcleos del CPU**: Proporciona información sobre cada núcleo de la CPU.
console.log("Núcleos de la CPU: ", os.cpus());
// Ejemplo de salida:
// [
//   { model: 'Intel(R) Core(TM) i7-10700K', speed: 3800 },
//   { model: 'Intel(R) Core(TM) i7-10700K', speed: 3800 },
//   ...
// ]

// ===================================================================

// 9. **Memoria total del sistema**: Muestra la cantidad total de memoria en el sistema (en bytes).
console.log("Memoria total del sistema (bytes): ", os.totalmem());
// Ejemplo: 17179869184 (bytes)

// ===================================================================

// 10. **Memoria libre del sistema**: Devuelve la cantidad de memoria libre en el sistema (en bytes).
console.log("Memoria libre del sistema (bytes): ", os.freemem());
// Ejemplo: 8589934592 (bytes)

// ===================================================================

// 11. **Interfaces de red**: Muestra las interfaces de red del sistema (como Ethernet, Wi-Fi, etc.).
console.log("Interfaces de red: ", os.networkInterfaces());
// Ejemplo de salida:
// {
//   eth0: [{ address: '192.168.0.1', family: 'IPv4', internal: false }, {...}],
//   wlan0: [{ address: '192.168.0.2', family: 'IPv4', internal: false }]
// }

// ===================================================================

// 12. **Versión del kernel del sistema operativo**: Obtiene la versión del kernel.
console.log("Versión del sistema operativo (kernel): ", os.release());
// Ejemplo: '5.4.0-42-generic'

// ===================================================================

// 13. **Número de núcleos del CPU**: Retorna el número total de núcleos del CPU en el sistema.
console.log("Número de CPUs disponibles: ", os.cpus().length);
// Ejemplo: 8 núcleos

// ===================================================================
