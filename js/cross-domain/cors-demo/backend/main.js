const http = require('http')

const server = http.createServer((req, res) => {
    // 所有请求都是跨域请求，所以可以直接设置请求头
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS')

    // 1.简单请求
    // if(req.url === '/api/test' && req.method === 'GET') {
    //     res.writeHead(200, {
    //         'Content-Type': 'application/json',
    //         'Access-Control-Allow-Origin': '*',

    //     })

    //     res.end(JSON.stringify({
    //         msg: '跨域成功！'
    //     }))
    // }

    // 2.复杂请求
    // 浏览器发送一个预检请求 OPTIONS
    if(req.method === 'OPTIONS') {
        res.writeHead(200); // 同意
        res.end();
        return;

    }

    if(req.url === '/api/test' && req.method === 'PATCH') {
        res.writeHead(200, {
            'Content-Type': 'application/json',
        })

        res.end(JSON.stringify({
            msg: '跨域成功!!！'
        }))
    }
})

server.listen(8000, ()=>{
    console.log('CORS Server running at http://localhost:8000');

})