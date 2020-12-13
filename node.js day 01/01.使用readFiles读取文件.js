// 导入文件系统模块
const fs = require('fs')
    // 参数1： 制定读取文件的路径
    // 参数2：编码格式
    // 参数3： 回调函数
fs.readFile('./files/11.txt', 'utf8', function(erro, success) {
    //function 中传递两个参数  一个为失败  一个为成功

    // 如果文件写入成功 erro打印为null  打印出成功的结果
    // 如果文件写入失败则 erro 值为一个错误对象  success 为undefined
    console.log(erro);

    console.log('------------');
    console.log(success);
})