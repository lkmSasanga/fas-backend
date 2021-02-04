const router = require('express').Router()
let Sentiment = require('../models/sentiment.model')
const AuthController = require("../controllers/AuthController");
// const app = express()

const itemName = 'tv'

// end point localhost:5000/
router.route('/').get((req, res) => {
    // Sentiment.findOne({'item': itemName})
    //     .then(sentiment => res.json(sentiment))
    //     .catch(err => res.status(400).json('Error: ' + err))
    Sentiment.find()
        .then(sentiment => res.json(sentiment))
        .catch(err => res.status(400).json('Error: ' + err))

})

router.route('/api').get((req, res) => {
    res.send("Welcome to API!");
});

router.route('/api/register').post((req, res) => {
    res.send("Welcome to register API!");
    res.send(AuthController.registerUser)
});


// router.route('/')
module.exports = router
