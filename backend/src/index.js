const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

const mongodbUri = process.env.MONGODB_URI;

if (!mongodbUri) console.log(`mongodb_uri: ${mongodbUri}`);

mongoose.connect(mongodbUri,
  { useNewUrlParser: true, 
    useUnifiedTopology: true,
  }
);

app.use(express.json());
app.use(routes); 

app.listen(3333);