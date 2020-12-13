const http = require('http')
const server = http.createServer()
server.on('request', (req, rep) => {
    const str = `请求的地址为${req.url},请求的的method为${req.method}`
    rep.setHeader('Content-Type', 'text/html; charset=utf-8')
    rep.end(str)
})
server.listen('8080', () => {
    console.log('server running');
})