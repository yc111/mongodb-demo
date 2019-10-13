// insertDemo.js file
let mongoose = require('mongoose');

// 导入连接模块
let connection = require('./connection');

// 创建schema
let StudentSchema = new mongoose.Schema({
   name: String,
   age: Number
})

// 通过connection和schema创建model
let StudentModel = connection.model('Student', StudentSchema);


// 通过实例化model创建文档
let studentDoc = new StudentModel({
    name: 'zhangsan',
    age: '20'
})

// 将文档插入到数据库
studentDoc.save().then((doc) => {
    console.log(doc)
})

// 另一种方式往数据库中写入一个文档
StudentModel.create({
    name: 'lisi',
    age: '19'
})

StudentModel.create({
    name: 'wangwu',
    age: '18'
})