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
