const Address = require("../models/address.model");
const mongoose = require("mongoose");


exports.createAddress = (req, res) => {

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
    var addressId = " "
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
    })


}
