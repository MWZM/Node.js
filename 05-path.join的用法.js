const path = require('path')
const fs = require('fs')
    //path.join解决了路径拼接的问题
    //path.join('a','b','../')
    //当出现 ../ 时路径会向上跳一层 输出结果就为 a
fs.readFile(path.join(__dirname, './files/1.txt'), 'utf8', function(erro, success) {
    if (erro) {
        return console.log('读取失败' + erro.message);
    }
    console.log(success);
})