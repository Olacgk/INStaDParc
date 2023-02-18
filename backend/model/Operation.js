const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const operationSchema = mongoose.Schema({
    nomOperation : {type: String, required: true, min: 6, max: 255, unique: true},
    responsable : { type: mongoose.Schema.Types.ObjectId, ref: 'Users', required: true },
    dateDebut : {type: Date, required: true},
    dateFin : {type: Date, required: true},
    etude: { type: mongoose.Schema.Types.ObjectId, ref: 'Etude', required: true },
})

operationSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Operation', operationSchema);