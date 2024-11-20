// Importación de módulos y archivos
const http = require("http");
const cursos = require("./Cursos.js");

// Configuración del puerto
const PUERTO = 3500;

// Creación del servidor
const SERVIDOR = http.createServer((req, res) => {
    const { method } = req;

    console.log(`Solicitud recibida con método: ${method}, URL: ${req.url}`);

    switch (method) {
        case "GET":
            manejarSolicitudGet(req, res);
            break;
        case "POST":
            manejarSolicitudPost(req, res);
            break;
        case "DELETE":
            manejarSolicitudDelete(req, res);
            break;
        case "PUT":
            manejarSolicitudPut(req, res);
            break;
        case "PATCH":
            manejarSolicitudPatch(req, res);
            break;
        default:
            console.log(`Método no permitido: ${method}`);
            res.statusCode = 405; // Método no permitido
            res.setHeader("Content-Type", "text/plain");
            res.end("Método no permitido");
            break;
    }
});

// Función para manejar solicitudes GET
function manejarSolicitudGet(req, res) {
    const path = req.url;

    switch (path) {
        case "/":
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/plain");
            res.end("Bienvenidos a mi primer servidor y API creado con Node.js");
            console.log("Respuesta enviada para la raíz.");
            break;
        case "/cursos":
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify(cursos.infoCursos));
            console.log("Se enviaron todos los cursos.");
            break;
        case "/cursos/programacion":
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify(cursos.infoCursos.programacion));
            console.log("Se enviaron los cursos de programación.");
            break;
        case "/cursos/matematicas":
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify(cursos.infoCursos.matematicas));
            console.log("Se enviaron los cursos de matemáticas.");
            break;
        default:
            res.statusCode = 404;
            res.setHeader("Content-Type", "text/plain");
            res.end("Ruta no encontrada");
            console.log("Ruta no encontrada.");
            break;
    }
}

// Función para manejar solicitudes POST
function manejarSolicitudPost(req, res) {
    const path = req.url;
    let body = "";

    req.on("data", (chunk) => {
        body += chunk.toString();
    });

    req.on("end", () => {
        try {
            const nuevoCurso = JSON.parse(body);
            if (path === "/cursos/programacion") {
                cursos.infoCursos.programacion.push(nuevoCurso);
                console.log("Curso agregado a programación:", nuevoCurso);
            } else if (path === "/cursos/matematicas") {
                cursos.infoCursos.matematicas.push(nuevoCurso);
                console.log("Curso agregado a matemáticas:", nuevoCurso);
            } else {
                res.statusCode = 404;
                res.setHeader("Content-Type", "text/plain");
                res.end("Ruta no encontrada");
                return;
            }

            res.statusCode = 201;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ mensaje: "Curso agregado exitosamente", curso: nuevoCurso }));
        } catch (error) {
            console.error("Error al procesar el cuerpo de la solicitud:", error.message);
            res.statusCode = 400;
            res.setHeader("Content-Type", "text/plain");
            res.end("Error en el formato de los datos enviados.");
        }
    });
}

// Función para manejar solicitudes DELETE
function manejarSolicitudDelete(req, res) {
    const path = req.url;
    let body = "";

    req.on("data", (chunk) => {
        body += chunk.toString();
    });

    req.on("end", () => {
        try {
            const { id } = JSON.parse(body);
            if (path === "/cursos/programacion") {
                cursos.infoCursos.programacion = cursos.infoCursos.programacion.filter(curso => curso.id !== id);
                console.log(`Curso con ID ${id} eliminado de programación.`);
            } else if (path === "/cursos/matematicas") {
                cursos.infoCursos.matematicas = cursos.infoCursos.matematicas.filter(curso => curso.id !== id);
                console.log(`Curso con ID ${id} eliminado de matemáticas.`);
            } else {
                res.statusCode = 404;
                res.setHeader("Content-Type", "text/plain");
                res.end("Ruta no encontrada");
                return;
            }

            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ mensaje: "Curso eliminado exitosamente" }));
        } catch (error) {
            console.error("Error al procesar el cuerpo de la solicitud:", error.message);
            res.statusCode = 400;
            res.setHeader("Content-Type", "text/plain");
            res.end("Error en el formato de los datos enviados.");
        }
    });
}

// Función para manejar solicitudes PUT (actualizar curso completamente)
function manejarSolicitudPut(req, res) {
    const path = req.url;
    let body = "";

    req.on("data", (chunk) => {
        body += chunk.toString();
    });

    req.on("end", () => {
        try {
            const cursoActualizado = JSON.parse(body);
            let lista = path === "/cursos/programacion" ? cursos.infoCursos.programacion :
                path === "/cursos/matematicas" ? cursos.infoCursos.matematicas : null;

            if (lista) {
                const index = lista.findIndex(curso => curso.id === cursoActualizado.id);
                if (index !== -1) {
                    lista[index] = cursoActualizado;
                    console.log(`Curso actualizado en ${path.split("/")[2]}:`, cursoActualizado);
                    res.statusCode = 200;
                    res.setHeader("Content-Type", "application/json");
                    res.end(JSON.stringify({ mensaje: "Curso actualizado exitosamente", curso: cursoActualizado }));
                } else {
                    res.statusCode = 404;
                    res.setHeader("Content-Type", "text/plain");
                    res.end("Curso no encontrado.");
                }
            } else {
                res.statusCode = 404;
                res.setHeader("Content-Type", "text/plain");
                res.end("Ruta no encontrada.");
            }
        } catch (error) {
            console.error("Error al procesar el cuerpo de la solicitud:", error.message);
            res.statusCode = 400;
            res.setHeader("Content-Type", "text/plain");
            res.end("Error en el formato de los datos enviados.");
        }
    });
}

// Función para manejar solicitudes PATCH (editar parcialmente un curso)
function manejarSolicitudPatch(req, res) {
    const path = req.url;
    let body = "";

    req.on("data", (chunk) => {
        body += chunk.toString();
    });

    req.on("end", () => {
        try {
            const cambios = JSON.parse(body);
            let lista = path === "/cursos/programacion" ? cursos.infoCursos.programacion :
                path === "/cursos/matematicas" ? cursos.infoCursos.matematicas : null;
            if (lista) {
                const index = lista.findIndex(curso => curso.id === cambios.id);
                if (index !== -1) {
                    lista[index] = { ...lista[index], ...cambios };
                    console.log(`Curso modificado en ${path.split("/")[2]}:`, cambios);
                    res.statusCode = 200;
                    res.setHeader("Content-Type", "application/json");
                    res.end(JSON.stringify({ mensaje: "Curso modificado exitosamente", curso: lista[index] }));
                } else {
                    res.statusCode = 404;
                    res.setHeader("Content-Type", "text/plain");
                    res.end("Curso no encontrado.");
                }
            } else {
                res.statusCode = 404;
                res.setHeader("Content-Type", "text/plain");
                res.end("Ruta no encontrada.");
            }
        } catch (error) {
            console.error("Error al procesar el cuerpo de la solicitud:", error.message);
            res.statusCode = 400;
            res.setHeader("Content-Type", "text/plain");
            res.end("Error en el formato de los datos enviados.");
        }
    });
}

// Iniciar el servidor
SERVIDOR.listen(PUERTO, () => {
    console.log(`El servidor está escuchando en el puerto ${PUERTO}`);
});
