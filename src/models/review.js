const mongoose = require('mongoose');
const { Schema } = mongoose;

const ratingSchema = new Schema({
    review: {
        type: String,
        required: true,
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const Rating = mongoose.model('Rating', ratingSchema);

module.exports = Rating;
