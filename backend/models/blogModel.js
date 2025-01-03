const mongoose = require('mongoose');



const reviewSchema = mongoose.Schema({
    name: {type: String, required: true},
    comment: {type: String, required: true},
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    }
}, {timestamps: true})


const blogSchema = mongoose.Schema({
    name: {type: String, required: true},
    image: {type: String, required: true},
    text: {type: String, required: true},
    reviews: [reviewSchema],
    rating: {type: Number, required: true, default: 0},
    numReviews: {type: Number, required: true, default: 0 }


}, {timestamps: true});


const Blog = mongoose.model('Blog', blogSchema);

module.exports = {Blog};

