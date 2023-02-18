const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const etudeSchema = mongoose.Schema({
    nomEtude : {type: String, required: true, min: 6, max: 255, unique: true},
});