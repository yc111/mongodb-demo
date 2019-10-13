let mongoose = require('mongoose');

// 通过monggose创建连接
let conn = mongoose.createConnection(
    // 连接地址，端口默认为27017
    // dbtest 是我想使用的数据库名，它会在插入数据的时候自动创建
    'mongodb://127.0.0.1:27017/dbtest',
    // 一些兼容设置，必须写，你不写运行时也会提示你写
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

// 监听打开数据库连接事件
conn.on('open', () => {
    console.log('打开mongodb链接');
})

// 监听出错事件
conn.on('error', (err) => {
    console.log('出错：' + err);
})

// 导出连接模块，供其他模块使用
module.exports = conn;