var express = require('express');
var router = express.Router();

router.get('/speakers', function(req, res) {
  res.render('speakers',{
    pageTitle: 'Speakers',
    pageID: 'speakers'
  });
});

module.exports = router;
