const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;

var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");


exports.signup = (req, res) => {
    const user = new User({
        full_name: req.body.full_name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
    });

    user.save((err) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        } else {
            res.send({ message: "User was registered successfully!" });
        }
    });
};

exports.signin = (req, res) => {
    User.findOne({
        email: req.body.email,
    })
        .exec((err, user) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }

            if (!user) {
                return res.status(404).send({ message: "User Not found." });
            }

            var passwordIsValid = bcrypt.compareSync(
                req.body.password,
                user.password
            );

            if (!passwordIsValid) {
                return res.status(401).send({ message: "Invalid Password!" });
            }

            var token = jwt.sign({ id: user.id }, config.secret, {
                expiresIn: 86400, // 24 hours
            });


            // req.session.token = token;

            res.status(200).send({
                id: user._id,
                full_name: user.full_name,
                email: user.email,
                token: token
            });
        });
};

//   exports.signout = async (req, res) => {
//     try {
//       req.session = null;
//       return res.status(200).send({ message: "You've been signed out!" });
//     } catch (err) {
//       this.next(err);
//     }
//   };