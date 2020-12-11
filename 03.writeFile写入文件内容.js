// 导入文件系统模块
const fs = require('fs')
    // 参数1： 制定读取文件的路径
    // 参数2： 要填写的内容
    // 参数3： 回调函数
fs.writeFile('./files/2.txt', 'hello', function(erro) {
    //function 中传递一个参数 

    //填写内容相当于是 先创建一个新的文件再将之前相同路径下的文件进行覆盖 
    console.log(erro);
})