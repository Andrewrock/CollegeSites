var express = require('express');
var router = express.Router();
//var appdata = require('/colleges.json');
//var request = require('request');





/* GET home page. */
router.get('/', function(req, res) {
  //request("https://web-magpie-int-staging.magpiecrm.com/api/cfg/salesoutlet?salesoutletId=3", function(error, response, body){
    //req.app.locals.appdata.offerings = JSON.parse(body);
    //console.log(body);
    res.render('index', {
      title: 'Welcome to WhatCourse'
    });
  });
//});


router.get('/college', function(req, res) {
  res.render('college', { req:req, res:res,
     title: 'Colleges'
    });
  });

router.get('/colleges-course', function(req, res) {
  res.render('colleges-course', {
   title: 'Select a plan'
   });
  });








module.exports = router;
