const EventEmitter = require(`events`);
const emisorProductos = new EventEmitter();

emisorProductos.on(`Compra`, (total, Cantidad) => {
    console.log(`Se Ha Realizado Una Compra de ${Cantidad} productos`);
    console.log(`Con un valor de $${total} Pesos`);
    console.log(`Muchas gracias por su compra ;
        hasta la proxima`);
});
emisorProductos.emit(`Compra`, 500000, 6);