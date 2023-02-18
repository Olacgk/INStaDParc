const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator'); 

const materielSchema = mongoose.Schema({
    numImmatriculation : {type: String, required: true, min: 6, max: 255, unique: true},
    description: {type: String, required: true, min: 6, max: 255},
    etat: {type: String, required: true, min: 6, max: 255},
    dateAcquisition: {type: Date, required: true},
    dateMiseEnService: {type: Date, required: true},
    dateFinService: {type: Date, required: true},
    type: {type: mongoose.Schema.Types.ObjectId, ref: 'Type', required: true },
    marque: {type: mongoose.Schema.Types.ObjectId, ref: 'Marque', required: true },
});

materielSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Materiel', materielSchema);