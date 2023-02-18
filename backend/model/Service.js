const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const serviceSchema = mongoose.Schema({
    abbrv : {type: String, default: '', min: 6, max: 255},
    nomService : {type: String, required: true, min: 6, max: 1024, unique: true},
    direction : { type: mongoose.Schema.Types.ObjectId, ref: 'Direction', required: true },
});

serviceSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Service', serviceSchema);