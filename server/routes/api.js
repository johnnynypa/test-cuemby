var express = require('express');
var router = express.Router();
var datas = require('./students.json');

router.post('/students', function(req, res){
    console.log("fdsf");
    res.send(datas);
})

module.exports = router;