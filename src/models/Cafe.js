const {Schema, model} = require('mongoose')

const cafeSchema = new Schema({
    nombre: String,
    descripcion: String
})

module.exports = model('Cafe', cafeSchema);

// tabla cafe 
// id ++
// nombre = varchar(100),
// descripcion= varchar(200)