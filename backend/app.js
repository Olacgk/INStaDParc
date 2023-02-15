const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'frontend/build')));
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://instadparc:INStaD03@instadparc.79d9pu9.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
