var express = require('express');
var router = express.Router();

// get login page
router.get('/', function(req, res, next) {
	res.render('login',{title: "login page"})
});

module.exports = router;