/*
 * @Author: shuhua
 * @Date: 2021-12-02 09:58:11
 * @LastEditTime: 2021-12-10 18:26:13
 * @LastEditors: shuhua
 * @Description: 
 * @FilePath: \my-node-project\routes\users.js
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// 注册接口
router.post('/regist',function(req,res,next){
  var data = {
    username:req.body.username,
    password:req.body.password,
    password2:req.body.password2,
  }
  res.send(data)
})

module.exports = router;
