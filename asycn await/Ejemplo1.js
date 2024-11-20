// Función que simula la orden de un producto y retorna una promesa.
function OrdenarProductos(producto) {
    return new Promise((resolve, reject) => {
        // Log inicial que indica qué producto estamos ordenando.
        console.log(`Iniciando el proceso de orden para el producto: "${producto}" de Andrésocm.`);

        // Simulamos un retraso para imitar un proceso de orden real.
        setTimeout(() => {
            // Verificamos si el producto es "taza". Si lo es, resolvemos la promesa.
            if (producto === 'taza') {
                resolve(`Ordenando una taza con el logo de Andrésocm... ¡Pedido en proceso!`);
            } else {
                // Si no es "taza", rechazamos la promesa con un mensaje de error.
                reject(`Error: Producto no disponible. No se ha podido procesar la orden. Por favor, intenta nuevamente.`);
            }
        }, 2000); // Retraso de 2 segundos para simular el proceso de orden
    });
}

// Función para procesar el pedido tras haberlo ordenado.
function procesarPedido(respuesta) {
    return new Promise((resolve /*, reject*/) => {
        // Log que indica que estamos procesando la respuesta.
        console.log(`Recibida la respuesta: "${respuesta}". Ahora procedemos a procesar el pedido...`);

        // Simulamos un procesamiento adicional que tarda 4 segundos.
        setTimeout(() => {
            // Después del procesamiento, resolvemos la promesa con un mensaje de éxito.
            resolve('El pedido ha sido procesado exitosamente. ¡Listo para ser enviado!');
        }, 4000); // Retraso de 4 segundos para simular el procesamiento
    });
}

// Función principal que utiliza `async` y `await` para coordinar las promesas.
async function realizarPedido(producto) {
    try {
        // Esperamos la respuesta de la función OrdenarProductos antes de continuar.
        const respuestaOrden = await OrdenarProductos(producto);
        // Log que muestra el mensaje obtenido tras ordenar el producto.
        console.log(respuestaOrden);

        // Ahora, procesamos el pedido usando la respuesta obtenida de la orden.
        const respuestaProceso = await procesarPedido(respuestaOrden);
        // Log que muestra el resultado del procesamiento del pedido.
        console.log(respuestaProceso);

    } catch (error) {
        // Si ocurre un error en alguna de las promesas, mostramos un mensaje de error.
        console.error(`¡Algo salió mal! Error: ${error}`);
    }
}

// Ejemplo de uso
realizarPedido('taza'); // Llama a la función con un producto válido.
realizarPedido('plato'); // Llama a la función con un producto inválido para probar el manejo de errores.
