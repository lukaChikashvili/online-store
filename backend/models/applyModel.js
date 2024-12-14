const mongoose = require('mongoose');

const applySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    surname: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    visit: {
        type: String,
        required: true
    },

}, {timestamps: true});

const Apply = mongoose.model('Apply', applySchema);

module.exports = {Apply};

