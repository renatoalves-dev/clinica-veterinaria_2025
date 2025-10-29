const mongoose = require('./backend/database/conn_node');

// Import the Express.js module
const express = require('express'); 
const NODE_ENV = process.env.NODE_ENV || 'DEVELOPMENT';
// Create an Express application instance
const app = express(); 

const cors = require('cors');

const morgan = require('morgan');
const  bodyParser = require("body-parser");
//require('dotenv/config');
require('dotenv').config();
const { PORT = 3000, API_URL = '/api/v1'} = process.env;
const api = API_URL;
app.use(express.json());
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("tiny"));
const clientsRoutes = require('./backend/src/routes/clientsRoute');
const petsRoutes = require('./backend/src/routes/petsRoutes');
const vetsRoutes = require('./backend/src/routes/veterinarioRoutes');
const procsRoutes = require('./backend/src/routes/procedimentoRoute');
const consultasRoutes = require('./backend/src/routes/consultasRoute');

//Define a route handler for GET requests to the root URL ('/')
app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>'); // Send "Hello World!" as the response
});

app.use(`${api}/clients`, clientsRoutes);
app.use(`${api}/pets`, petsRoutes);
app.use(`${api}/vets`, vetsRoutes);
app.use(`${api}/procs`, procsRoutes);
app.use(`${api}/consultas`, consultasRoutes);

// Start the server and listen for incoming requests on the specified port
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`); 
  // Log a message indicating the server is running
  console.log(`Running in ${NODE_ENV} mode`);
  
});

