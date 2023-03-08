const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator'); 

const materielSchema = mongoose.Schema({
    numImmatriculation : {type: String, required: true, min: 6, max: 255, unique: true},
    // numSerie : {type: String, required: true, min: 6, max: 255, unique: true},
    description: {type: String, required: true, min: 6, max: 255},
    etat: {type: String, required: true, min: 6, max: 255},
    dateAcquisition: {type: Date, required: true},
    dateMiseEnService: {type: Date },
    proprietaire: { type: Boolean, required: true},
    utilisateur: { type: String, min: 6, max: 255},
    available: { type: Boolean, required: true, default: true},
    reforme: { type: Boolean, required: true, default: false},
    type: {type: mongoose.Schema.Types.ObjectId, ref: 'Type', required: true },
    marque: {type: mongoose.Schema.Types.ObjectId, ref: 'Marque', required: true },
});

materielSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Materiel', materielSchema);