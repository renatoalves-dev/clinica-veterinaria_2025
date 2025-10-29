const mongoose = require('mongoose');

// 1. Connect to MongoDB

async function main(){

 await mongoose.connect('mongodb://localhost:27017/clinica-veterinaria');
  console.log("Conectou ao MongoDB Successfully!!!!!!!!");
}


main().catch(error => console.error('MongoDB connection error:', error));


module.exports = mongoose;

