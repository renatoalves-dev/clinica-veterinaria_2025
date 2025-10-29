const mongoose = require('mongoose');


const consultaSchema = new mongoose.Schema({

consultaDate: {type: Date, required: true},
totalCost: {type: Number, required: true},


 pet: {

    type: mongoose.Schema.Types.ObjectId,
    ref: "Pet",
    required: true,
  },

 vet: {
  
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vet",
    required: true,
    
  },

  // relacionamentos muitos para muitos com procedimentos

  proc: [{

    type: mongoose.Schema.Types.ObjectId,
    ref: "Proc",
    required: true,
  }],

});

module.exports = mongoose.model("Consulta", consultaSchema);