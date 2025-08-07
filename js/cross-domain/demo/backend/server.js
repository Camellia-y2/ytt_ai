// commonjs
const http = require('http');
// js是异步的 异步无阻塞
// node 天生性能好 相同的用户访问数，使用的服务器数量少，更便宜
const server = http.createServer((req, res) => {
    if(req.url === '/api/hello' && req.method === 'GET') {
        console.log('/////')
        res.writeHead(200, {
            // 'Content-Type': 'application/json'
            // 响应头是javascript
            'Content-Type': 'application/javascript'
        })
        // JSON 
        const data = {
            code: 0,
            msg: '字节我来了'
        }
        // json with padding 技术栈 JSONP
        res.end("callback(" + JSON.stringify(data) + ")");

        // JSON.stringify({
            // message:'Hello from Node.js backend'
        // })
    } else {
        res.writeHead(404, {
            'Content-Type': 'application/json'
        })
        res.end(JSON.stringify({
            message:'Not Found'
        }))
    }
})
// 服务器程序在 8080 端口上运行
server.listen(8080, () => {
    console.log('Server is running on port 8080')
})