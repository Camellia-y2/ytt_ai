// es6 模块化
// 模块化是语言的能力
// mjs 后缀使用 es6 模块化
// （js 后缀）node 默认不可以使用es6模块化
// node 最新版本支持的 22版本
// node 准备跟 require commonJS say goodbye
// es6 module 更先进 用mjs
import http from 'http';

http.createServer((req, res) => { // 回调函数 箭头函数
//   res.writeHead(200, { 'Content-Type': 'text/plain' }); // 设置响应头 状态码 响应头
  res.end('Hello,server\n'); // 响应体
}).listen(1234); // 监听端口