//声明fs
const fs = require('fs')

fs.readFile('./files/3.成绩.txt', 'utf8', function(erro, success) {
    if (erro) {
        return console.log('获取失败' + erro.message);
    }
    // console.log('获取成功' + success);
    const newarr = success.split(' ')
    const arr = []
        // console.log(newarr);
    newarr.forEach(item => {
        arr.push(item.replace('=', '：'))
    });
    // console.log(arr);
    const Newarr = arr.join('\n\r')
        // console.log(Newarr);
        //绝对路径移植性很差，不利于维护

    // __dirname 表示当前目录的文件夹路径
    fs.writeFile('C:\\Users\\Administrator\\Desktop\\node.js day 01\\files\\4.成绩完成', Newarr, function(erro) {
        if (erro) {
            return console.log('成绩填写失败' + erro.message);
        }
        console.log('成绩填写成功');
    })
})