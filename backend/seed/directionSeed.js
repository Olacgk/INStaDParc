const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
require('dotenv/config');

const directionSchema = require('../model/Direction');

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch((e) => console.log(e));


const direction_data = [{
    abbrv: 'DSIBD',
    nomDirection: 'Direction des Systèmes d\'Information et des Bases de Données',
}];

const seeddb = async () => {
    await directionSchema.deleteMany({});
    console.log("Data destroyed");

    await directionSchema.insertMany(direction_data);     
    console.log("Data inserted");
};

seeddb().then(() => {
    mongoose.connection.close();
});
