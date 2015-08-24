var express = require('express');
var router = express.Router();
var appdata = require('/colleges.json');
var request = require('request');





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


router.get('/checkout', function(req, res) {
  //request("https://web-magpie-int-staging.magpiecrm.com/api/cfg/salesoutlet?salesoutletId=3", function (error, response, body) {
    res.render('checkout', { req:req, res:res,
      title: 'Checkout'
    });
  });
//});

router.get('/plans', function(req, res) {
  //request("https://web-magpie-int-staging.magpiecrm.com/api/cfg/salesoutlet?salesoutletId=3", function (error, response, body) {
    res.render('plans', {
      //req: req, res: res,
      title: 'Select a plan'
    });
  });
//});








module.exports = router;
