const promesaCp = true;
const Promesa1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		if (promesaCp) {
			resolve(`Promesa Cumplida`);
		} else {
			reject(`Promesa rechazada.......`);
		}
	}, 4000);
});

const manejarPv = (valor) => {
	console.log(valor);
};

const maneraPr = (Razon) => {
	console.log(Razon);
};

Promesa1.then(manejarPv, maneraPr);