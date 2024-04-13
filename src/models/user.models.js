const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        default: "CUSTOMER"
    },
    mobile: {
        type: String,
        required: true,
    },
    address: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Address"
    }],
    paymentInformation: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "PaymentInformation"
    }],
    ratings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Rating"
    }],
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review"
    }],
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
