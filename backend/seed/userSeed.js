const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
require('dotenv/config');

const userSchema = require('../model/Users');
const serviceSchema = require('../model/Service');
const directionSchema = require('../model/Direction');

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch((e) => console.log(e));

const hash = bcrypt.hashSync('password123', 10);


const user_data = [
  {
        name: 'DOE',
        prenom: 'John',
        email: 'johndoe@instad.com',
        password: hash,
        role: 'admin',
        fonction: 'Directeur',
        service: null,
        direction: null,
    }
];

const seeddb = async () => {

    await userSchema.deleteMany({});
    console.log("Data destroyed");

    await serviceSchema.findOne({ abbrv: 'SIR' }).then(s => {
        user_data[0].service = s._id;
    });
    await directionSchema.findOne({ abbrv: 'DSIBD' }).then(s => {
        user_data[0].direction = s._id;
    });

    await userSchema.insertMany(user_data);    
    console.log("Data inserted");
};

seeddb().then(() => {
    mongoose.connection.close();
});
