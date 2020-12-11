const fs = require('fs')
fs.readFile('./files/11.txt', 'utf8', function(erro, success) {
    if (erro) {
        //打印出 erro 的结果
        return console.log('获取失败' + erro.measg);
    }
    console.log('-------------');
    console.log(success);
})