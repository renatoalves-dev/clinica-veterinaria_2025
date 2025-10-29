const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Proc = require('../models/Procedimentos');


router.get('/', async (req, res) => {


    const procList = await Proc.find();

    if(!procList){

        res.status(500).json({success: false});
    }

    res.status(200).send(procList);


});

router.get('/:id', async (req, res) => {

    const proc = await Proc.findById(req.params.id);

    if(!proc){

        res.status(404).json({message: "O Procedimento não esta cadastrado"})
    }

  res.status(200).send(proc);

});


router.post("/", async (req, res) => {

let proc = new Proc({

    name: req.body.name,
    price: req.body.price,
    

});

proc = await proc.save();

if(!proc) return res.status(400).send("O Procedimento não foi cadastrado!!");

res.send(proc);

});


router.delete('/:id', async (req, res) => {

 await Proc.findByIdAndDelete(req.params.id).then((proc) => {

    if(proc){

        return res.status(200).json({success: true, message: "O Procedimento foi excluído com Sucesso!!!"});

    }else{

        return res.status(404).json({success: false, message: "Procedimento não encontrado"});
    }

}).catch((err) => {


    return res.status(500).json({success: false, error: err})

});

});

router.put('/:id', async (req, res) => {


    const proc = await Proc.findByIdAndUpdate(req.params.id, {

        name: req.body.name,
        price: req.body.price,
        

    },

    {new:true}
);

if(!proc) res.status(400).send("O Procedimento não foi atualizado !!!");

res.send(proc);

});



module.exports = router;