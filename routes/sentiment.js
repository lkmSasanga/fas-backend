const router = require('express').Router()
const bcrypt = require('bcrypt');

let Sentiment = require('../models/sentiment.model')
const AuthController = require("../controllers/AuthController");
const Registration =require('../models/UserModel');

// // end point localhost:5000/
// router.route('/sentiment').get((req, res) => {
//     Sentiment.find()
//         .then(sentiment => res.json(sentiment))
//         .catch(err => res.status(400).json('Error: ' + err))
//
// })

router.route('/api').get((req, res) => {
    res.send("Welcome to API!");
});




// const RouteNames = {
//     register: '/register',
//     login: '/login',
//     data: '/allData',
//     validate: '/validateUsername'
//
// };


// Registration route
// router.route(RouteNames.register).post((req, res) => {
//     let register = new Registration(req.body);
//     register.save()
//         .then(reg => {
//             res.sendStatus(200);
//         })
//         .catch(err => {
//             res.status(400).send("Failed to store to database");
//         });

    //
    // res.send("Welcome to register API!");
    // res.send(AuthController.registerUser)
// });


module.exports = router
