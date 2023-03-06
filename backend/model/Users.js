const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    name : {
        type: String,
        required: true,
        min : 6,
        max : 255
    },
    prenom : {
        type: String,
        required: true,
        min : 6,
        max : 255
    },
    email : {
        type: String,
        required: true,
        unique: true,
        min : 6,
        max : 255
    },
    password : {
        type: String,
        required: true,
        min : 6,
        max : 1024
    },
    role: {
        type: String,
        required: true,
        min : 6,
        max : 255
    },
    date : {
        type: Date,
        default: Date.now,
    },
    // fonction : {type: String, required: true, min : 6, max : 255},
    service : { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true },
    direction : { type: mongoose.Schema.Types.ObjectId, ref: 'Direction', required: true },
});

userSchema.plugin(uniqueValidator);


module.exports = mongoose.model('Users', userSchema);

































