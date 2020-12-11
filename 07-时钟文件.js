const path = require('path')
const fs = require('fs')
const regstyle = /<style>[\s\S]*<\/style>/
const regscript = /<script>[\s\S]*<\/script>/
    // 读取index.html
fs.readFile(path.join(__dirname, './files/index.html'), 'utf8', function(erro, success) {
        if (erro) {
            return console.log('获取失败' + erro.message);
        }
        // console.log('获取成功' + success);
        Css(success)
        Scripts(success)
    })
    // 获取style文件
function Css(htmlStr) {
    const styles = regstyle.exec(htmlStr)
    console.log(styles);
    const newcss = styles[0].replace('<s>', '').replace('</s>', '')
    fs.writeFile(path.join(__dirname, './clock/index.css'), newcss, function(erro, success) {
        if (erro) {
            return console.log('获取失败' + erro.message);
        }
        // console.log('获取成功' + success);
        console.log('存入成功', success);
    })
}
//获取script文件
function Scripts(htmlStr) {
    const Scripts = regscript.exec(htmlStr)
    console.log(Scripts);
    const newscript = Scripts[0].replace('<script>', '').replace('</script>', '')
    fs.writeFile(path.join(__dirname, './clock/index.js'), newscript, function(erro, success) {
        if (erro) {
            return console.log('获取失败' + erro.message);
        }
        // console.log('获取成功' + success);
        console.log('存入成功', success);
    })
}