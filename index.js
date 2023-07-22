// Importar librerias
const express = require('express')

// Iniciar Base de datos
require('./db/mongoose')

// Iniciar rutas
const directorRouter = require('./routers/director');
const administratorRouter = require("./routers/administrator");
const professorRouter = require("./routers/professor");
const representantRouter = require("./routers/representant");
const informeDescriptivoRouter = require("./routers/informeDescriptivo");
const rasgosPersonalesRouter = require("./routers/rasgosPersonales")
const proyectoEscolar = require("./routers/proyectoEscolar");

// Iniciar Express
const app = express();

//Configurar Express
app.use(express.json())
app.use(directorRouter)
app.use(administratorRouter)
app.use(professorRouter)
app.use(representantRouter)
app.use(informeDescriptivoRouter)
app.use(rasgosPersonalesRouter)
app.use(proyectoEscolar)

const port = process.env.PORT || 3000;

// Inicio Express
app.listen(port, () => {
    console.log('Servidor iniciado en puerto ' + port)
})