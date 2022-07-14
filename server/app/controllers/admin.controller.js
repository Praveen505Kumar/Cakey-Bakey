const config = require("../config/auth.config");
const db = require("../models");
const Admin = db.Admin;

var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");

exports.signup = (req, res) => {
    const admin = new Admin({
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
    });
    admin.save((err) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        } else {
            res.send({ message: "Admin was registered successfully!" });
        }
    });

}

exports.signin = (req, res) => {
    Admin.findOne({
        email: req.body.email,
    })
        .exec((err, admin) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }

            if (!admin) {
                return res.status(404).send({ message: "Admin Not found." });
            }

            var passwordIsValid = bcrypt.compareSync(
                req.body.password,
                admin.password
            );

            if (!passwordIsValid) {
                return res.status(401).send({ message: "Invalid Password!" });
            }

            var token = jwt.sign({ id: admin._id }, config.secret, {
                expiresIn: 86400, // 24 hours
            });


            req.session.token = token;

            res.status(200).send({
                nagarjuna: admin.id,
                id: admin._id,
                email: admin.email
            });
        });

}

exports.signout = async (req, res) => {
    try {
        req.session = null;
        return res.status(200).send({ message: "You've been signed out!" });
    } catch (err) {
        this.next(err);
    }
};