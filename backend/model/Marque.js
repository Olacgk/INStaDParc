const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const marqueSchema = mongoose.Schema({
    nomMarque : {type: String, required: true, min: 6, max: 255, unique: true},
});

marqueSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Marque', marqueSchema);