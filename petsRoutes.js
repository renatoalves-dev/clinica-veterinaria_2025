const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Client = require('../models/Client');
const Pet = require('../models/Pet');



router.post('/', async (req, res) => {

const client = await Client.findById(req.body.client);

if(!client) return res.status(404).send("Cliente inválido");

let pet = new Pet({

    name: req.body.name,
    specie: req.body.specie,
    breed: req.body.breed,
    color: req.body.color,
    height: req.body.height,
    weight: req.body.weight,
    gender: req.body.gender,
    birthDate: req.body.birthDate,
    mother: req.body.mother,
    father: req.body.father,
    observations: req.body.observations,
    client,client
    

});

pet = await pet.save();

if(!pet) return res.status(400).send("O registro do Pet não foi cadastrado no banco de dados");

res.send(pet);

});


router.get('/', async (req, res) => {


    const petList = await Pet.find().populate('client');

    if(!petList){

        res.status(500).json({success: false});
    }

    res.status(200).send(petList);


});

router.get('/:id', async (req, res) => {

    const pet = await Pet.findById(req.params.id).populate('client');

    if(!pet){

        res.status(404).json({message: "O PET não foi encontrado"})
    }

  res.status(200).send(pet);

});


router.delete('/:id', async (req, res) => {

 await Pet.findByIdAndDelete(req.params.id).then((pet) => {

    if(pet){

        return res.status(200).json({success: true, message: "O registro do Pet foi excluído com Sucesso!!!"});

    }else{

        return res.status(404).json({success: false, message: "O registro do Pet não foi encontrado"});
    }

}).catch((err) => {


    return res.status(500).json({success: false, error: err})

});

});

router.put('/:id', async (req, res) => {

const client = await Client.findById(req.body.client);

   if(!client) return res.status(404).send("Cliente inválido");

    const pet = await Pet.findByIdAndUpdate( req.params.id, {

       
        name: req.body.name,
        specie: req.body.specie,
        breed: req.body.breed,
        color: req.body.color,
        height: req.body.height,
        weight: req.body.weight,
        gender: req.body.gender,
        birthDate: req.body.birthDate,
        mother: req.body.mother,
        father: req.body.father,
        observations: req.body.observations,
        client,client

    },

    {new:true}
);

if(!pet) res.status(400).send("O registro do Pet não foi atualizado!!!");

res.send(pet);

});


module.exports =  router; 