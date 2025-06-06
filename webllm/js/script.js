// 这里可以添加JavaScript代码
// console.log('WebLLM项目已启动');
// js 主动去拉取 http 接口
// web 1.0 时代 html/css/js 服务器端 java 返回的 js 只做简单交互
// web 2.0 时代 前端 js 可以自己去拉取接口，然后自己去渲染
// web 3.0 时代 前端 js 可以自己去拉取接口，然后自己去渲染，并且可以自己去调用智能模型
// 这里我们用 js 去拉取 github 的接口
// fetch("https://api.github.com/users/shunwuyu/repos")
//     .then(res => res.json())
//     .then(data => {
//         document.querySelector('#reply').innerHTML += data.map(repo=>`
//             <ul>
//                 <li>${repo.name}</li>
//             </ul>
//         `).json('')
//     //    console.log(data)
//     })

// const { model } = require("@tensorflow/tfjs")

// 当LLM api服务
// 以 chat 方式 用 AIGC 生成/完成 返回的内容
// 由 openai 制定的

// 请求行
// 命名
// webLLM web 底层是 http 协议
// llm api 服务 也是 http 协议
// 所以我们可以用 http 协议去请求 llm api 服务
// api.deepseek.com 二级域名 LLM 服务以 api 的方式提供（一级域名是 .com 是一个顶级域名 是一个公共的域名）
// HTTPS 加密的 http  更安全
//  /chat 聊天的方式
const endpoint = "https://api.deepseek.com/chat/completions"
// 请求头
const headers = {
    // 内容类型
    "Content-Type": 'application/json', // 确保请求头中包含 Content-Type 字段
    // 授权
    Authorization: `Bearer sk-5b6621f5fd144981bdcf2dc22a239bd2` // 替换为你的 API 密钥
}
// 请求体
const payload = {
    model: 'deepseek-chat',
    messages: [
        // chat 三种方式
        // 1. 系统角色 system : 只会出现一次 设置系统的角色 开始会话时
        // 2. 用户角色 user ：提问
        // 3. 助手角色 assistant ：回答
        { role: 'system', content: 'you are a helpful assistant.' },
        { role:'user', content: '你好 Deepseek' }
    ]
}

fetch(endpoint,{
    method: 'POST', // 请求方法 post （get没有请求体，我们要跟它聊天要请求体）
    headers: headers, // 请求头
    body: JSON.stringify(payload) // 请求体 序列化 json 字符串 发送给服务器
    // JSON.stringify({a:1}) 返回字符串‘{"a":1}’ 对象不能传输 http 请求只能传输字符串，二进制流 所以要序列化

    // 请求 + LLM 生成需要花时间
    // http 是基于请求响应的简单协议
    // 返回的也是文本或二进制流 所以要解析 
}).then(res => res.json()) // 解析响应体 为 json 对象
// 解析返回的json数据也要花时间
.then(data => {
    // console.log(data) // 打印响应数据 到控制台
    document.querySelector('#reply').innerHTML += data.choices[0].message.content // 渲染到页面上
})