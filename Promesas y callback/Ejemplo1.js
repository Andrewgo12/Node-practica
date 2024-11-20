// Función para determinar el estado del pedido con un 70% de probabilidad de éxito
const EstatusPedidos = () => {
    return Math.random() < 0.7; // 70% de probabilidad de éxito
};

// Crear la promesa del pedido
const pedidoPizza = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (EstatusPedidos()) {
            resolve('Pedido exitoso, su entrega está en camino.'); // Resolución exitosa
        } else {
            reject('Error en el pedido, por favor inténtelo nuevamente.'); // Rechazo del pedido
        }
    }, 2000); // Simula un retraso de 2 segundos
});

// Función para manejar pedidos exitosos
const manejarPedidos = (mensajeDeConfirmacion) => {
    console.log(`✅ Confirmación: ${mensajeDeConfirmacion}`);
};

// Función para manejar pedidos fallidos
const RechacarPedidos = (mensajeDeError) => {
    console.error(`❌ Error: ${mensajeDeError}`);
};

// Manejo de la promesa usando .then y .catch
pedidoPizza
    .then(manejarPedidos) // En caso de éxito, llama a manejarPedidos
    .catch(RechacarPedidos); // En caso de error, llama a RechacarPedidos
