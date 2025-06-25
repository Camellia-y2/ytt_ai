// 启动http server
// 引入express框架
// import express from 'express';
// node 最初的 commonjs 的模块化方案
const express = require('express');
// console.log(express);
const app = express();//后端应用
// 路由
app.get('/',(req,res)=>{
    // 返回index.html
    // res.send("hello");// str
    // response 响应对象  有请求req 用户，浏览器（proxy 网络代理） url (localhost:1314) + get + path/
    // http 足够简单 高并发 用户赶快走 断开联系
    // __dirname 项目的根路径、
    console.log(__dirname);
    res.sendFile(__dirname+'/index.html');
})

// 添加一个支持server push 的路由
app.get('/sse',(req,res)=>{
    // 支持server push 不断的服务器端推送 少量的
    // 设置响应头
    res.set({
        // stram 文本流事件
        'Content-Type':'text/event-stream', // 支持文本流
        'Cache-Control':'no-cache',// 禁止前端使用缓存
        'Connection':'keep-alive', // 保持连接
    });
    res.flushHeaders(); // 刷新响应头
    setInterval(()=>{
        const message = `Current Time is ${new Date().toLocaleTimeString()}`
        // server push 服务器端推送
        res.write(`data: ${message}\n\n`);
    },1000)
})

// node 内置模块 http 模块
const http = require('http').Server(app); // server 的基本能力  B/S 架构
// 怎么理解 http 的 监听？ 伺服状态，伺候用户
http.listen(1314,()=>{
    console.log('http server running on port 1314');
})