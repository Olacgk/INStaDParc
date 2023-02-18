const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');


const directionSchema = mongoose.Schema({
    abbrv: {type: String, default: '', min: 6, max: 255},
    nomDirection : {type: String, required: true, min: 6, max: 1024, unique: true},
});

directionSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Direction', directionSchema);