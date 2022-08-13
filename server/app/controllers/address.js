const Address = require("../models/address.model");
const mongoose = require("mongoose");
const { validationResult } = require("express-validator");

exports.createAddress = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            error: errors.array()[0].msg
        })
    }
    const address = new Address(req.body);
    address.save((error, address) => {
        if (error) {
            return res.status(400).json({
                error: "Not able to save in DB"
            })
        }
        return res.status(200).json(address);
    });
}
exports.getAddress = (req, res) => {
    Address.findOne({ userId: mongoose.Types.ObjectId(req.profile._id) }).exec((error, address) => {
        if (error) {
            return res.status(400).json({
                error: "No addresses found in DB"
            })
        }
        res.status(200).json(address);
    })
}
exports.updateAddress = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            error: errors.array()[0].msg
        })
    }
    Address.findOne({ userId: mongoose.Types.ObjectId(req.profile._id) }).exec((error, address) => {
        if (error) {
            return res.status(400).json({
                error: "No addresses found in DB"
            })
        }
        Address.findOneAndUpdate(
            { _id: address._id },
            { $set: req.body },
            { new: true, useFindAndModify: false },
            (error, updatedAddress) => {
                if (error) {
                    return res.status(400).json({
                        error: "No able to update Address"
                    })
                }
                return res.status(200).json(updatedAddress)
            }
        )
    });
}
