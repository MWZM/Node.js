// 声明模块部分
const http = require('http')
const fs = require('fs')
const path = require('path')

// 创建服务器
const server = http.createServer()

// 监听服务器
server.on('request', (req, res) => {
        let url = req.url
        let fpath = ''
        if (url === '/') {
            fpath = path.join(__dirname, '/clock/index.html')
        } else {
            fpath = path.join(__dirname, 'clock', url)
        }

        fs.readFile(fpath, 'utf8', (erro, success) => {
            if (erro) return '404 not found'
            res.end(success)
        })
    })
    //进行读取页面

//启动服务器

server.listen('8080', () => {
    console.log('server running');
})