// server.js - 原生 Node.js 版本
const http = require('http');

// 返回 JSONP 格式响应
const server = http.createServer((req, res) => {
  // 匹配 GET 请求 /say
  if (req.url.startsWith('/say')) {
    // 解析查询参数（简单处理）
    // ES6+ 提供的构造 URL 对象的方法
    const url = new URL(req.url, `http://${req.headers.host}`);
    const wd = url.searchParams.get('wd');
    console.log(url)
    const callback = url.searchParams.get('callback');

    console.log(wd);      // Iloveyou
    console.log(callback); // show

    // 返回 JSONP 格式响应
    res.writeHead(200, { 'Content-Type': 'application/javascript' });
    const data = {
        code: 0,
        msg: '我不爱你'
    }
    // callback是个函数，将字符串化的data数据作为参数传入
    res.end(`${callback}(${JSON.stringify({ data })})`);
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});