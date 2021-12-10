/*
 * @Author: shuhua
 * @Date: 2021-12-08 23:03:25
 * @LastEditTime: 2021-12-08 23:15:41
 * @LastEditors: shuhua
 * @Description: 
 * @FilePath: \my-node-project\model\index.js
 */
var MongoClient = require('mongodb').MongoClient


var url = 'mongodb://localhost:27017'
var dbName = 'project'

// 数据库的链接方法封装
function connect(callback) {
  MongoClient.connect(url,function(err,client){
    if(err){
      console.log('数据库连接错误',err)
    }else{
      var db = client.db(dbName)
      callback && callback(db)
      client.close()
    }
  })
}

module.exports = {
  connect
}