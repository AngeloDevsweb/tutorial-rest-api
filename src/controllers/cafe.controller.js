const cafeCtrl = {};

const Cafe = require('../models/Cafe')

cafeCtrl.getCafe = async(req, res)=>{
    const cafes = await Cafe.find();
    res.json(cafes);
}
cafeCtrl.createCafe = async(req, res)=>{
    const {nombre, descripcion} = req.body;
    const newCafe = new Cafe({
        nombre: nombre,
        descripcion: descripcion
    })
    await newCafe.save();
    res.send('cafe guardado con exito')
}

cafeCtrl.getOneCafe = async(req, res)=>{
    const unCafe = await Cafe.findById(req.params.id);
    res.json(unCafe);
}

cafeCtrl.deleteCafe = async(req, res)=>{
    await Cafe.findByIdAndDelete(req.params.id);
    res.send('cafe eliminado');
}

cafeCtrl.updateCafe = async(req, res)=>{
    const {nombre, descripcion} = req.body;
    await Cafe.findByIdAndUpdate(req.params.id, {
        nombre:nombre,
        descripcion: descripcion
    })
    res.send('el cafe se ha actualizado')
}

module.exports = cafeCtrl;