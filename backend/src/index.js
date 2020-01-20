const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const http = require('http');
const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

let mongodbUri = '';

if (!process.env.MONGODB_URI) {
  const env = require('../config/env');
  mongodbUri = env.getMongoDbUri();
} else {
  mongodbUri = process.env.MONGODB_URI;
}

mongoose.connect(mongodbUri,
  { useNewUrlParser: true, 
    useUnifiedTopology: true,
  }
);
 
app.use(cors());
app.use(express.json());
app.use(routes); 

server.listen(process.env.PORT || 3333);