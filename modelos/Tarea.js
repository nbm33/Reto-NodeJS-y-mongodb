const mongoose = require('mongoose');

let TareaSchema = new mongoose.Schema({
    idUsuario: Number,
    documentoIdentidad: String,
    nombres: String,
    apellidos: String,
    direccion: String,
    correoElectronico: String,
    telefonoFijo: Number,
    telefonoCelular: Number,
    sitioWeb: String,
    descripcionPerfil: String
});

module.exports= mongoose.model("tarea", TareaSchema, "Tareas");