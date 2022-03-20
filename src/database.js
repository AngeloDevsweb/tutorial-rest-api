const mongoose = require('mongoose');

//cadena conexion
const URI = process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb://localhost/dbtest';

mongoose.connect(URI);

const conection = mongoose.connection;

conection.once('open', ()=>{
    console.log('la base de datos ha sido conectada: ', URI);
})