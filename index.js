var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/getStatus', function (req, res, next) {
  return res.send({
    "result": "confirming"
  })
});

module.exports = router;
