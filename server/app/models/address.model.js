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
        maxlength: 32,
        required: true,
        trim: true
    },
    user: {
        type: ObjectId,
        ref: "User",
        required: true
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