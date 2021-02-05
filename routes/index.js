let express = require('express');
let router = express.Router();

let Sentiment = require('../models/sentiment.model')

router.get('/api', function(req, res) {
    res.send("Welcome to API!");
});

// end point localhost:5000/
router.route('/sentiment').get((req, res) => {
    Sentiment.find()
        .then(sentiment => res.json(sentiment))
        .catch(err => res.status(400).json('Error: ' + err))

})

require('./AuthRoutes')(router);
// require('./sentiment')(router);


module.exports.router = router
