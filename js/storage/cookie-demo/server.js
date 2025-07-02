// node 后端
// node 内置的核心模块
// js 在命令行中运行
// require node 早期模块化commonjs
// import 是 es6 更先进的模块化方案：module 
// 老方案 commonJS
// node 受欢迎的原因：三句话启动http服务  适合中小型项目
// 端口 -》 某个服务
// 3306 -》 mysql 数据库
// 1234 -》 node 服务
// 80 -》 http 协议 80端口
// 1234 8080 端口被占用了 服务对应一个进程（分配资源） 线程（执行） 
// 进程可以有多个线程 一个进程可以有多个线程

// domain (localhost) -> ip地址 （127.0.0.1） -> 某台设备 -> port 端口 -> 设备上的某个进程
// 一台设备上可以很多端口使用，有多个http服务 多个网站
// 不要使用一些特殊端口 
const http = require('http'); // 引入核心模块
const fs = require('fs'); // 文件系统模块 file system
const path = require('path'); // 路径模块 path
const server = http.createServer((req, res) => { // 回调函数 箭头函数
        //res.end('Hello World\n'); // 响应体
        //http 基于请求响应的协议
        // 为了资源
        if(req.method=='GET' && (req.url=='/' || req.url=='/index.html')){ // 首页
            // 异步 callback
            fs.readFile(path.join(__dirname,'public','index.html'),(err,content)=>{
                // 前端体验为主，后端稳定为主
                if(err){
                    res.writeHead(500);//文件不存在 5xx-》服务器错误
                    res.end('Server Error');
                    return;
                }
                // 返回给html的内容，不只是html,css,js,jpg
                res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'}); // 响应头
                res.end(content); // 响应体
            })
        }
        // 后端路由，资源暴露
        // http://localhost:1234/style.css
        // 协议 http:// 域名 localhost 端口 1234 路径 /style.css 
        if(req.method=='GET'&& req.url=='/style.css'){
            fs.readFile(path.join(__dirname,'public','style.css'),(err,content)=>{
                if(err){
                    res.writeHead(500);
                    res.end('Server Error');
                    return;
                }
                res.writeHead(200,{'Content-Type':'text/css;charset=utf-8'});
                res.end(content);
            })
        }
        if(req.method=='GET'&& req.url=='/script.js'){
            fs.readFile(path.join(__dirname,'public','script.js'),(err,content)=>{
                if(err){
                    res.writeHead(500);
                    res.end('Server Error');
                    return;
                }
                res.writeHead(200,{'Content-Type':'text/css;charset=utf-8'});
                res.end(content);
            })
        }
    }); 

server.listen(1234); // 监听端口