const verifySignUp = require("../middlewares/verifySignUp");
const controller = require("../controllers/admin.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
    next();
  });

  app.post("/admin/signup", verifySignUp.verifyAdminSignUP, controller.signup);
  app.post("/admin/signin", controller.signin);
  app.post("/admin/signout", controller.signout);
};
