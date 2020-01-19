const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
// const env = require('../config/env');

const app = express();

const mongodbUri = process.env.MONGODB_URI;
// const mongodbUri = process.env.MONGODB_URI || env.getMongoDbUri();

mongoose.connect(mongodbUri,
  { useNewUrlParser: true, 
    useUnifiedTopology: true,
  }
);
 
app.use(cors());
app.use(express.json());
app.use(routes); 

app.listen(process.env.PORT || 3333);