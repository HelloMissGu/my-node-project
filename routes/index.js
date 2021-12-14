/*
 * @Author: shuhua
 * @Date: 2021-12-02 09:58:11
 * @LastEditTime: 2021-12-14 18:22:55
 * @LastEditors: shuhua
 * @Description: 
 * @FilePath: \my-node-project\routes\index.js
 */
var express = require('express');
var router = express.Router();
var model = require('../model');

/* GET home page. */
router.get('/', function(req, res, next) {
  model.connect(function(db){
    db.collection('users').find().toArray(function(err,docs){
      console.log('用户列表11',docs);
      
    })
  })
  res.render('index', { title: 'Express' });
});

router.get('/regist',function(req,res,next){
  console.log('接口请求',res);
  model.connect(function(db){
    db.collection('users').find().toArray(function(err,docs){
      console.log('用户列表',docs);
      
    })
  })
  
  res.render('regist',{})
})

module.exports = router;
