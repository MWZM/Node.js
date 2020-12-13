const http = require('http') //导入http模块
    //require 为函数加载模块
const server = http.createServer() // 创建web服务器
server.on('request', (req, rep) => { //为服务器绑定request事件，监听客户端需求
    console.log('some visit our web server');
})
server.listen('8080', () => { //启动服务器
    console.log('server running');
})