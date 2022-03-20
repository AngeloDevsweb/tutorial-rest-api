const {Schema, model} = require('mongoose')

const videoSchema = new Schema({
    titulo: String,
    descripcion: String,
    url: String
})

module.exports = model('Video', videoSchema);