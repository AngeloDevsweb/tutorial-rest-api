const express = require('express');
const cors = require('cors');

const app = express();

//configuraciones
app.set('port', process.env.PORT || 4000);

//middlewares
app.use(cors());
app.use(express.json());

//ruta principal
app.get('/', (req, res)=>{
    res.send('Bienvenido a mi api rest')
})

//rutas
app.use('/api/cafes', require('./routes/cafe'))
app.use('/api/videos', require('./routes/video'))

module.exports = app;