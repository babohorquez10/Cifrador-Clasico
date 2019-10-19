let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/data', function(req, res, next) {
  res.send("Aaa");
});

module.exports = router;
