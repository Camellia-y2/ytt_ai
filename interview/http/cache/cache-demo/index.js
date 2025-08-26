const http = require('http')
const fs = require('fs')

http.createServer(function(request, response) {
    if(request.url === '/') {
        // index.html
        // node默认的读取文件是异步的
        // 可以使其变为同步的 fs.readFileSync
        // 性能差点
        const html = fs.readFileSync('test.html', 'utf-8')
        response.writeHead(200, {
            'Content-Type': 'text/html'
        });
        response.end(html)
    }
    if(request.url === '/script.js') {
        response.writeHead(200, {
            'Content-Type': 'text/javascript'
        })
        const script = fs.readFileSync('script.js', 'utf-8')
        response.end(script)
    }
}).listen(8888)
