const videoCtrl = {};

const Video = require('../models/Videos')

videoCtrl.getVideo = async(req, res)=>{
    const video = await Video.find();
    res.json(video);
}
videoCtrl.createVideo = async(req, res)=>{
    const {titulo, descripcion, url} = req.body;
    const newVideo = new Video({
        titulo: titulo,
        descripcion: descripcion,
        url: url
    })
    await newVideo.save();
    res.send('video guardado con exito')
}

videoCtrl.deleteVideo = async(req, res)=>{
    await Video.findByIdAndDelete(req.params.id);
    res.send('video eliminado')
}

module.exports = videoCtrl;