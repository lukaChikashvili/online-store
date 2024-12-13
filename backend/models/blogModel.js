const mongoose = require('mongoose');



const blogSchema = mongoose.Schema({
    name: {type: String, required: true},
    image: {type: String, required: true},
    text: {type: String, required: true}


}, {timestamps: true});


const Blog = mongoose.model('Blog', blogSchema);

module.exports = {Blog};

