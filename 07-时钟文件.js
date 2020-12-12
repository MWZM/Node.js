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
        HTMLS(htmlStr)
    })
    // 获取style文件
function Css(htmlStr) {
    //利用正则先进行抽取
    const styles = regstyle.exec(htmlStr)
    console.log(styles);
    //利用字符串的替换 去掉style起始标签
    const newcss = styles[0].replace('<style>', '').replace('</style>', '')
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
// 定义处理 HTML 结构的方法
function HTMLS(htmlStr) {
    // 5.2 将字符串调用 replace 方法，把内嵌的 style 和 script 标签，替换为外联的 link 和 script 标签
    const newHTML = htmlStr.replace(regStyle, '<link rel="stylesheet" href="./index.css" />').replace(regScript, '<script src="./index.js"></script>')
        // 5.3 写入 index.html 这个文件
    fs.writeFile(path.join(__dirname, './clock/index.html'), newHTML, function(err) {
        if (err) return console.log('写入 HTML 文件失败！' + err.message)
        console.log('写入 HTML 页面成功！')
    })
}