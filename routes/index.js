var express = require('express');
var router = express.Router();




/* GET home page. */
router.get('/', function(req, res) {
  //request("https://web-magpie-int-staging.magpiecrm.com/api/cfg/salesoutlet?salesoutletId=3", function(error, response, body){
    //req.app.locals.appdata.offerings = JSON.parse(body);
    //console.log(body);
    res.render('index', {
      title: 'Welcome to WhatCourse',
      id : 'home'
    });
  });
//});


router.get('/college', function(req, res) {
  res.render('college', { req:req, res:res,
     title: 'Colleges',
     id : 'college'
    });
  });

router.get('/cao', function(req, res) {

  res.render('cao', {
   title: 'CAO',
    id: 'cao'
   });
  });


router.get('/cao', function(req, res) {
  res.render('colleges-courses', {
    title: 'College Courses',
    id: 'courses'
  });
});






module.exports = router;
