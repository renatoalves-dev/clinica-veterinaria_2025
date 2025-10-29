const mongoose = require('mongoose');


const clientSchema = new mongoose.Schema({

name: {type: String, required: true},
email: {type: String, required: true},
cellPhone: {type: String, required: true},
address: {type: String, required: true},
state: {type: String, required: true},

});

module.exports = mongoose.model("Client", clientSchema);

