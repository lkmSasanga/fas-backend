module.exports = function(app) {

    const AuthController = require("../controllers/AuthController");

    app.post("/api/register", AuthController.registerUser);
    app.post("/login", AuthController.loginUser);
};
