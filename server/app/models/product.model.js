const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        maxlength: 100,
        required: true,
        trim: true
    },
    description: {
        type: String,
        maxlength: 3000,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        maxlength: 32,
        required: true,
        trim: true
    },
    category: {
        type: ObjectId,
        ref: "Category",
        required: true
    },
    photo: {
        data: Buffer,
        contentType: String
    }
}, { timestamps: true })


module.exports = mongoose.model("Product", productSchema);