const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const typeSchema = mongoose.Schema({
    nomType : {type: String, required: true, min: 6, max: 255, unique: true},
});

typeSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Type', typeSchema);