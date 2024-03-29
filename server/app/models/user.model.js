const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");
const crypto = require("crypto");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32,
    },
    email: {
        type: String,
        required: true,
        maxlength: 32,
        unique: true,
        trim: true
    },
    encry_password: {
        type: String,
        required: true,
    },
    salt: String,
    purchases: {
        type: Array,
        default: []
    },
    role: {
        type: Number,
        default: 0
    }
}, { timestamps: true }
);


userSchema.virtual("password")
    .set(function (password) {
        this._password = password;
        this.salt = uuidv4();
        this.encry_password = this.securePassword(password)
    })
    .get(function () {
        return this._password;
    })


userSchema.methods = {
    authenticate: function (plainPassword) {
        return this.securePassword(plainPassword) === this.encry_password
    },

    securePassword: function (plainPassword) {
        if (!plainPassword) return "";
        try {
            return crypto.createHmac('sha256', this.salt)
                .update(plainPassword)
                .digest('hex');
        } catch (err) {
            return ""
        }
    }
}


module.exports = mongoose.model("User", userSchema);