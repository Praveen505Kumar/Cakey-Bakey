const User = require("../models/user.model");
const { validationResult } = require("express-validator")
const jwt = require("jsonwebtoken");
const { expressjwt } = require("express-jwt");

exports.signup = (req, res) => {
    const errors = validationResult(req);
    const { email } = req.body;
    if (!errors.isEmpty()) {
        return res.status(422).json({
            error: errors.array()[0].msg
        })
    }
    const user = new User(req.body);
    // checks whether email exist or not
    User.findOne({ email }, (error, existEmail) => {
        if (existEmail) {
            return res.status(400).json({
                error: "Email already exist"
            })
        }

        user.save((error, user) => {
            if (error || !user) {
                return res.status(422).json({
                    error: "Unable to save in DB"
                })
            }
            return res.status(200).json({
                name: user.name,
                email: user.email,
                id: user.id
            })
        })
    })
}

exports.signin = (req, res) => {
    const errors = validationResult(req);
    const { email, password } = req.body;
    if (!errors.isEmpty()) {
        return res.status(422).json({
            message: errors.array()[0].msg
        })
    }
    User.findOne({ email }, (error, user) => {
        if (error || !user) {
            return res.status(400).json({
                message: "user email doesn't exist"
            })
        }
        if (!user.authenticate(password)) {
            return res.status(401).json({
                message: "Email and password do not match"
            })
        }
        // store secret cakey-secret-bakey in env variables
        const token = jwt.sign({ _id: user._id }, "cakey-secret-bakey");

        res.cookie("token", token, { expire: new Date() + 9999 });
        const { _id, name, email, role } = user;
        res.status(200).json({ user: { _id, name, email, role } });
    })
}

exports.signout = (req, res) => {
    res.clearCookie("token");
    res.status(200).json({
        message: "User signout successfully"
    })
}
// modified for latest version
exports.isSignedIn = expressjwt({
    // store secret in env
    secret: "cakey-secret-bakey",
    algorithms: ["HS256"],
    useProperty: "auth",
    credentialsRequired: false,
    getToken: function fromHeaderOrQuerystring(req) {
        if (
            req.headers.cookie &&
            req.headers.cookie.split("=")[0] === "token"
        ) {
            return req.headers.cookie.split("=")[1];
        }
        return null;
    },
})

exports.isAuthenticated = (req, res, next) => {
    const checker = req.auth && req.profile && req.profile._id == req.auth._id;
    if (!checker) {
        return res.status(403).json({
            error: "ACCESS DENIED"
        })
    }
    next();
}

exports.isAdmin = (req, res, next) => {
    if (req.profile.role === 0) {
        return res.status(403).json({
            error: "You are not ADMIN, ACCESS DENIED"
        })
    }
    next();
}