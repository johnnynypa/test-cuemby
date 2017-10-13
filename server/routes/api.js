var express = require('express');
var router = express.Router();
var datas = require('./students.json');

var dataPrueba = {
    "students":[
        {
            "id": 101,
            "name":"Carlos",
            "active": true,
            "grades": [ 2.3, 4.3, 5.0],
            "yearsOld":15,
            "color":"blue"
        },
        {
            "id": 202,
            "name":"Mark",
            "active": true,
            "grades": [ 3.3, 5.0, 3.0],
            "yearsOld":18,
            "color":"green"
        },
        {
            "id": 303,
            "name":"Stephany",
            "active": true,
            "grades": [ 3.3, 4.0, 3.8],
            "yearsOld":17,
            "color":"pink"
        },
        {
            "id": 404,
            "name":"Angela",
            "active": true,
            "grades": [ 1.0, 4.8, 4.0],
            "yearsOld":16,
            "color":"gray"
        },    
        {
            "id": 505,
            "name":"Jackson",
            "active": true,
            "grades": [ 5.0, 5.0, 5.0],
            "yearsOld":15,
            "color":"blue"
        },
        {
            "id": 606,
            "name":"Melissa",
            "active": true,
            "grades": 3,
            "yearsOld":19,
            "color":"yellow"
        },    
        {
            "id": 505,
            "name":"Jackson",
            "active": 3, //To verify that only values are used in active
            "grades": [ 5.0, 5.0, 5.0],
            "yearsOld":15,
            "color":"blue"
        },
        {
            "id": 606,
            "name":"Melissa",
            "active": false,
            "grades": [ 3.0, 4.0, 5.0],
            "yearsOld":19,
            "color":"yellow"
        }
    ]
}    

router.post('/students', function(req, res){
    console.log("fdsf");
    // res.send("string"); //Test without json array
    // res.send(dataPrueba); //Test with other json array
    res.send(datas); //Production
})

module.exports = router;