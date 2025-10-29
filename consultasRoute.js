const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Consulta = require('../models/Consulta');
const Pet = require('../models/Pet');
const Vet = require('../models/Veterinario');
const Proc = require('../models/Procedimentos');

router.get('/', async (req, res) => {


    const consultaList = await Consulta.find().populate("pet").populate("vet").populate("proc");

    if(!consultaList){

        res.status(500).json({success: false});
    }

    res.status(200).send(consultaList);


});

router.post("/", async (req, res) => {


    const pet = await Pet.findById(req.body.pet);
    const vet = await Vet.findById(req.body.vet);
    if(!pet) return res.status(400).send("Pet inválido");
     if(!vet) return res.status(400).send("Veterinário  inválido");

     // verificar se existem procedimentos

     const procedimentos = await Proc.find({

  _id: {$in: req.body.procedimentos},

     });

     if(procedimentos.length !== req.body.procedimentos.length){

        return res.status(400).send("Procedimento inválido");
     }

let consulta = new Consulta({

    consultaDate: req.body.consultaDate,
    totalCost: req.body.totalCost,
    pet:pet,
    vet:vet,
    proc: req.body.procedimentos,

    

});

consulta = await consulta.save();

if(!consulta) return res.status(400).send("A consulta não foi cadastrada!!");

res.send(consulta);

});


router.get('/:id', async (req, res) => {
    
    const consulta = await Consulta.findById(req.params.id).populate("pet").populate("vet").populate("proc");

    if(!consulta){

        res.status(404).json({message: `A consulta com o ID:${id} fornecido não foi encontrada`})
    }

  res.status(200).send(consulta);

});

router.delete('/:id', async (req, res) => {

 await Consulta.findByIdAndDelete(req.params.id).then((consulta) => {

    if(consulta){

        return res.status(200).json({success: true, message: "A consulta foi excluída com Sucesso!!!"});

    }else{

        return res.status(404).json({success: false, message: "Consulta não foi encontrada"});
    }

}).catch((err) => {


    return res.status(500).json({success: false, error: err})

});

});




module.exports = router;