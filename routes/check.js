var express = require('express');
var router = express.Router();

router.post('/check',(res,req,next) =>
{
	if(req.body.username === "admin" && req.body.password === "admin")
	{
		res.redirect('/')
	}
	else
	{
		res.redirect('/error')
	}
})

module.exports = router
