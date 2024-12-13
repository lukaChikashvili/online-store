const mongoose = require('mongoose');



const blogSchema = mongoose.Schema({
    name: {type: String, required: true},
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    image: {type: String, required: true},


}, {timestamps: true});


const Blog = mongoose.model('Blog', blogSchema);

module.exports = {Blog};

