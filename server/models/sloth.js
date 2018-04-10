const mongoose = require('mongoose');

var SlothSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 2},
    age: {type: String, required: true, minlength: 1},
    quote: {type: String, required: true, minlength: 15}

}, {timestamps: true})

mongoose.model('Sloth', SlothSchema);
var Sloth = mongoose.model('Sloth');