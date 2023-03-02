const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
require('dotenv/config');

const serviceSchema = require('../model/Service');
const directionSchema = require('../model/Direction');

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch((e) => console.log(e));


const service_data = [{
    abbrv: 'SIR',
    nomService: 'Service de l\'informatique et des Réseaux',
    direction: null,
}];


const seeddb = async () => {


    await serviceSchema.deleteMany({});
    console.log("Data destroyed");

    await directionSchema.findOne({ abbrv: "DSIBD" }).then(d => {
        service_data[0].direction = d._id;
    });
    
    await serviceSchema.insertMany(service_data)
    
};

seeddb().then(() => {
    mongoose.connection.close();
});
