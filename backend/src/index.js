const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

const mongodbUri = 'mongodb://heroku_wps6lpvx:hfhue79ogobit6f5te6thntreu@ds161001.mlab.com:61001/heroku_wps6lpvx?authSource=heroku_wps6lpvx&readPreference=primary&appname=MongoDB%20Compass&ssl=false';

// if (!mongodbUri) console.log(`mongodb_uri: ${mongodbUri}`);

mongoose.connect(mongodbUri,
  { useNewUrlParser: true, 
    useUnifiedTopology: true,
  }
);

app.use(express.json());
app.use(routes); 

app.listen(process.env.PORT || 3333);