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
        type: Number,
        required: true
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    }

}, {timestamps: true});

const Apply = mongoose.model('Apply', applySchema);

module.exports = {Apply};

