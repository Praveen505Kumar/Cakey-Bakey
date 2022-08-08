const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const addressSchema = new mongoose.Schema({
    flatno: {
        type: String,
        maxlength: 100,
        required: true,
        trim: true
    },
    streetname: {
        type: String,
        maxlength: 100,
        required: true,
        trim: true
    },
    pincode: {
        type: Number,
        minlength: 6,
        maxlength: 6,
        required: true,
        trim: true
    },
    phoneno: {
        type: Number,
        minlength: 10,
        maxlength: 10,
        required: true,
        trim: true
    },
    userId: {
        type: ObjectId,
        ref: "User",
        required: true,
        unique: true
    },
    city: {
        type: String,
        maxlength: 100,
        required: true,
        trim: true
    },
    state: {
        type: String,
        maxlength: 100,
        required: true,
        trim: true
    },

}, { timestamps: true })


module.exports = mongoose.model("Address", addressSchema);