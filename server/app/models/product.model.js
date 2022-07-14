const mongoose = require("mongoose");

const Product = mongoose.model(
    "Product",
    new mongoose.Schema({
        title: String,
        price: String,
        image: String,
        description: String,
        type: String
    })
);

module.exports = Product;