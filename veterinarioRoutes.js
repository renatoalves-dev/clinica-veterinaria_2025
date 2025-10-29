const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Vet = require('../models/Veterinario');


router.get('/', async (req, res) => {


    const vetList = await Vet.find();

    if(!vetList){

        res.status(500).json({success: false});
    }

    res.status(200).send(vetList);


});



router.post("/", async (req, res) => {

let vet = new Vet({

    name: req.body.name,
    email: req.body.email,
    cellPhone: req.body.cellPhone,
    address: req.body.address,
    state: req.body.state,

});

vet = await vet.save();

if(!vet) return res.status(400).send("O Veterinário não foi cadastrado!!");

res.send(vet);

});

router.delete('/:id', async (req, res) => {

 await Vet.findByIdAndDelete(req.params.id).then((vet) => {

    if(vet){

        return res.status(200).json({success: true, message: "O Veterinário foi excluído com Sucesso!!!"});

    }else{

        return res.status(404).json({success: false, message: "Veterinário não foi encontrado"});
    }

}).catch((err) => {


    return res.status(500).json({success: false, error: err})

});

});


router.get('/:id', async (req, res) => {

    const vet = await Vet.findById(req.params.id);

    if(!vet){

        res.status(404).json({message: "O veterinário não foi encontrado"})
    }

  res.status(200).send(vet);

});

router.put('/:id', async (req, res) => {


    const vet = await Vet.findByIdAndUpdate(req.params.id, {

        name: req.body.name,
        email: req. body.email,
        cellPhone: req.body.cellPhone,
        address: req.body.address,        
        state: req.body.state,

    },

    {new:true}
);

if(!vet) res.status(400).send('O Cadastro do veterinário não foi atualizado !!!');

res.send(vet);

});


module.exports = router;