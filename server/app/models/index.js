const mongoose = require('mongoose');
// mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.Admin = require("./admin.model");
// db.Admin = require("./admin.model");


module.exports = db;