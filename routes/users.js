var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/tumlum', (req,res,next) =>
{
  res.send('sdhjsahdkjashdksada');
})
router.get('/tumlum2', (req,res,next) =>
{
  res.send('asdsadas');
})
router.get('/tumlum3', (req,res,next) =>
{
  res.send('asdsadas');
})






module.exports = router;
