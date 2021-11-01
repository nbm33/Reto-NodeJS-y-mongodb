//console.log("Hola Mundo Nicolas Bernal los saluda")

// Inicio
const express = require('express');
const mongoose = require('mongoose');
const TareaSchema = require('./modelos/Tarea.js');

const app = express();
const port = 3000;
const router = express.Router();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// conexión a base de datos de datos
mongoose.connect("mongodb+srv://prog_web:ProgWebMintic2022@clusterprogweb.kkljr.mongodb.net/ActividadesBD?retryWrites=true&w=majority").then(() => console.log("Conectado a MongoDB Atlas")).catch((error) => console.error(error));;
//Verificar conexion servidor
router.get('/', (req, res) => {
    res.send("El inicio de mi API");
})


// CREACION DEL CRUD
// 1. Obtenre
router.get('/tarea', (req, res) => {
    TareaSchema.find(function(err, datos){
        if(err){
            console.log("Error leyendo la tarea");
        }else{
            res.send(datos);
        }
    })
});

// 2. Crear
router.post('/tarea', (req, res) => {
    let nuevaTarea = new TareaSchema({
        idUsuario: req.body.id,
        documentoIdentidad: req.body.documento,
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        direccion: req.body.direccion,
        correoElectronico: req.body.correo,
        telefonoFijo: req.body.fijo,
        telefonoCelular: req.body.celular,
        sitioWeb: req.body.web,
        descripcionPerfil: req.body.descripcion
    });

    nuevaTarea.save(function (err,datos){
        if (err) {
            console.log(err);
        }
        res.send("Tarea almacenada correctamente.")
    })
});

// 3. Eliminar
router.delete('/tarea', (req, res) => {
    tareaSchema.deleteOne(
        { name: req.body.id }
    )
        .then(result => {
            res.json('Deleted')
        })
        .catch(error => console.error(error))
});

// 3. Actualizar
router.put('/tarea', (req, res) => {
    tareaSchema.findOneAndUpdate(
        { name: req.body.id },
        {
            $set: {
                idUsuario: req.body.id,
                documentoIdentidad: req.body.documento,
                nombres: req.body.nombres,
                apellidos: req.body.apellidos,
                direccion: req.body.direccion,
                correoElectronico: req.body.correo,
                telefonoFijo: req.body.fijo,
                telefonoCelular: req.body.celular,
                sitioWeb: req.body.web,
                descripcionPerfil: req.body.descripcion
            }
        },
        {
            upsert: true
        }
    ).then(result => { res.json('Updated') }).catch(error => console.error(error))
});

app.use(router);
app.listen(port, () => {
    console.log("servidor corriendo en el puerto 3000");
});

