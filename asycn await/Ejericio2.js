// Función que simula la reserva de una mesa en un restaurante.
function reservarMesa(restaurante, numeroDePersonas) {
    return new Promise((resolve, reject) => {
        console.log(`Procesando la solicitud de reserva en "${restaurante}" para ${numeroDePersonas} personas...`);

        // Simulamos un tiempo de respuesta de 3 segundos.
        setTimeout(() => {
            // Verificamos si el restaurante tiene disponibilidad según el número de personas.
            if (numeroDePersonas <= 4) {
                resolve(`Reserva confirmada en "${restaurante}" para ${numeroDePersonas} personas. ¡Nos vemos pronto!`);
            } else {
                reject(`Lo sentimos, "${restaurante}" no tiene mesas disponibles para más de 4 personas.`);
            }
        }, 3000); // Retraso de 3 segundos.
    });
}

// Función que simula el envío de un recordatorio tras confirmar la reserva.
function enviarRecordatorio(mensajeReserva) {
    return new Promise((resolve) => {
        console.log(`Preparando el recordatorio para la reserva...`);

        // Simulamos un tiempo de envío de 2 segundos.
        setTimeout(() => {
            resolve(`Recordatorio enviado: "${mensajeReserva}". ¡Que disfrutes tu experiencia!`);
        }, 2000); // Retraso de 2 segundos.
    });
}

// Función principal que utiliza `async` y `await` para manejar las promesas.
async function gestionarReserva(restaurante, numeroDePersonas) {
    try {
        // Intentamos reservar la mesa.
        const mensajeReserva = await reservarMesa(restaurante, numeroDePersonas);
        console.log(mensajeReserva);

        // Si la reserva se confirma, enviamos un recordatorio.
        const mensajeRecordatorio = await enviarRecordatorio(mensajeReserva);
        console.log(mensajeRecordatorio);

    } catch (error) {
        // En caso de error, mostramos un mensaje adecuado.
        console.error(`Error en la gestión de la reserva: ${error}`);
    }
}

// Ejemplo de uso
gestionarReserva('Restaurante Bella Vista', 3); // Reserva válida.
gestionarReserva('Restaurante Bella Vista', 5); // Reserva inválida (excede el límite de personas).
