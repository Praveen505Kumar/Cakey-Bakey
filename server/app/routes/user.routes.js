const verifySignUp = require("../middlewares/verifySignUp");
const controller = require("../controllers/user.controller");
const db = require("../models");
module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, Content-Type, Accept"
        );
        next();
    });

    app.post("/user/signup", verifySignUp.verifyUser, controller.signup);
    app.post("/user/signin", controller.signin);
    app.post("/user/signout", controller.signout);

    app.get("/home", (req, res) => {
        db.Category.find()
            .then((result) => {
                res.send(result);
            }).catch((err) => {
                console.log(err);
            });
    });
};