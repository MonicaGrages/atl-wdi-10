var express = require('express');
var router = express.Router();

router.get('/:toppingType', function (req, res) {
  console.log(req.params.toppingType);
})
//query params are optional, where url params are not
//ask about next


module.exports = router;
