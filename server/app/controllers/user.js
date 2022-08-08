const User = require("../models/user.model");
const mongoose = require("mongoose");
const { v4: uuidv4 } = require('uuid');

exports.getUserById = (req, res, next, id) => {
    // parse id(string) to object type
    User.findById(mongoose.Types.ObjectId(id)).exec((error, user) => {
        if (error || !user) {
            return res.status(400).json({
                error: "No user was foundin db"
            })
        }
        req.profile = user;
        next();
    })
}

exports.getUser = (req, res) => {
    req.profile.salt = undefined;
    req.profile.encry_password = undefined;
    return res.status(200).json(req.profile);
}

exports.getAllUsers = (req, res) => {
    User.find().exec((error, users) => {
        if (error) {
            return res.status(400).json({
                error: "No User found in DB"
            })
        }
        res.status(200).json(users)
    })
}

exports.updateUser = (req, res) => {
    User.findOneAndUpdate(
        { _id: req.profile._id },
        { $set: req.body },
        { new: true, useFindAndModify: false },
        (error, user) => {
            if (error) {
                return res.status(400).json({
                    error: "You are not authorized to update in db"
                })
            }
            user.salt = undefined;
            user.encry_password = undefined;
            res.status(200).json(user);
        }
    )
}

exports.deleteUser = (req, res) => {
    User.findOneAndRemove({ _id: req.profile._id }, { useFindAndModify: false })
        .exec((error, deletedUser) => {
            if (error) {
                return res.status(400).json({
                    error: "Not able to delete user"
                })
            }
            res.status(200).json({
                message: "Successfully deleted Category",
                deletedUser
            })
        })

}

exports.userPurchaseList = (req, res) => {
    return res.json(req.profile.purchases);
    // Order.findOne({user:req.profile._id})   // TODO:
    // .populate("user", "_id name")
    // .exec( (error, order) => {
    //     if(error){
    //         return res.status(400).json({
    //             error : "No order found in this acount"
    //         })
    //     }
    //     res.json(order)
    // })
}

exports.pushOrderInPurchaseList = (req, res, next) => {
    let purchases = [];   // creating temp array push all the products into the array
    req.body.order.products.forEach(product => {
        purchases.push({
            _id: product.id,
            name: product.name,
            description: product.description,
            category: product.category,
            quantity: product.quantity,
            price: product.price,
            transaction_id: uuidv4(),
            date: new Date()   // TODO:
        })
    })

    User.findOneAndUpdate(
        { _id: req.profile._id },
        { $push: { purchases: purchases } },
        { new: true, useFindAndModify: false },
        (error, purchases) => {
            if (error) {
                return res.status(400).json({
                    error: "Unable to save orders in user purchases list"
                })
            }
            next();
        }
    )
}