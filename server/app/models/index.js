const mongoose = require('mongoose');
// mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.Admin = require("./admin.model");
db.Product = require("./product.model");
db.Category = require("./category.model");

module.exports = db;