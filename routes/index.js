var express = require('express');
var router = express.Router();

router.get('/api', function(req, res) {
    res.send("Welcome to API!");
});

// require('./AuthRoutes')(router);


module.exports.router = router
