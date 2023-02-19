const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());

// app.use(express.static(path.join(__dirname, 'frontend/build')));
mongoose.connect(process.env.DB_CONNECTION, ()=>{
  console.log("Connected to DB")
  });


const authRoute = require('./routes/auth');
app.use('/api/auth', authRoute);

const userRoute = require('./routes/user');
app.use('/api/user', userRoute);

const materialRoute = require('./routes/material');
app.use('/api/material', materialRoute);

const typeRoute = require('./routes/type');
app.use('/api/type', typeRoute);

const marqueRoute = require('./routes/marque');
app.use('/api/marque', marqueRoute);

app.listen(8080, ()=> console.log("Listening to port 8080"))