const Category = require("../models/category.model");
const mongoose = require("mongoose");

exports.getCategoryById = (req, res, next, id) => {
    Category.findById(mongoose.Types.ObjectId(id)).exec((error, category) => {
        if (error) {
            return res.status(400).json({
                error: "No category found in DB"
            })
        }
        req.category = category;
        next();
    })
}

exports.createCategory = (req, res) => {
    const category = new Category(req.body);

    category.save((error, category) => {
        if (error) {
            return res.status(400).json({
                error: "please fill category name"
            })
        }
        return res.status(200).json(category);
    });
}

exports.getCategory = (req, res) => {
    return res.status(200).json(req.category);
}

exports.getAllCategories = (req, res) => {
    Category.find().exec((error, categories) => {
        if (error) {
            return res.status(400).json({
                error: "No categories found in DB"
            })
        }
        res.status(200).json(categories)
    })
}

exports.updateCategory = (req, res) => {
    Category.findOneAndUpdate(
        { _id: req.category._id },
        { $set: req.body },
        { new: true, useFindAndModify: false },
        (error, updatedCategory) => {
            if (error) {
                return res.status(400).json({
                    error: "No able to update category"
                })
            }
            return res.status(200).json(updatedCategory)
        }
    )
}

exports.deleteCategory = (req, res) => {
    Category.findOneAndRemove({ _id: req.category._id }, { useFindAndModify: false })
        .exec((error, deletedCategory) => {
            if (error) {
                return res.status(400).json({
                    error: "Not able to delete category"
                })
            }
            res.status(200).json({
                message: "Successfully deleted Category",
                deletedCategory
            })
        })

}