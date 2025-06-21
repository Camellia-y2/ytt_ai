import { useState } from 'react'
import './App.css'

function App() {
  console.log(import.meta.env.VITE_API_KEY);
  // react 内置的hook（钩子）函数 快速的解决一些问题 响应式的数据状态
  // useRef DOM 等对象的绑定 
  const [content, setContent] = useState('')
  const [imgBase64Data, setImgBase64Data] = useState('')
  const [isValid, setIsValid] = useState(false)

  // base64? google 推出的编码方案
  const updateBase64Data = (e) => {
    // 拿到图片  e html5  js 和操作系统本地文件交互
    const file = e.target.files[0];
    // console.log(file);
    if (!file) return;
    // html5 读的方式 读取文件
    const reader = new FileReader();
    reader.readAsDataURL(file);
    // 异步操作
    reader.onload = () => {
      // console.log(reader.result);
      setImgBase64Data(reader.result)
      setIsValid(true)
    }
  }
  // asynchronous 异步的
  const update = async () => {
    if(!imgBase64Data) return;
    const endpoint = 'https://api.moonshot.cn/v1/chat/completions';
    const headers = {
      // - 虽然传输的是JSON数据，但HTTP协议底层传输的是二进制流
      // - 服务器需要明确知道如何解码这些二进制数据，所以要先声明
      // - application/json 表示请求体是JSON格式
      'Content-Type': 'application/json',
      // 授权码 Bearer 一般都会带（标记  后面带token）
      'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`
    }
    // 实时反馈给用户
    setContent('正在生成....')
    const response = await fetch(endpoint, {
      method: 'POST',
      headers, // es6中 JSON key value 一样可以省略
      body: JSON.stringify({ // 序列化，将对象转换为字符，可以传输
        model: 'moonshot-v1-8k-vision-preview',
        messages:[
          {
            role: 'user', // 角色 ： system 系统  user 用户  assistant 助手
            content: [
              {
                type: 'image_url',
                image_url: {
                  "url": imgBase64Data,
                }
              },
              {
                type: 'text',
                text: '请用中文描述图片的内容'
              }
            ]
          }
        ]
      }) 
    })

    // 二进制字节流 response.json 也是异步的，用 await 把异步变同步
    const data = await response.json();// response.json反序列化，将字符转回为对象
    setContent(data.choices[0].message.content);
  }
  return (
    <div className="container">
      <div>
        <label htmlFor="fileInput">文件：</label>
        <input 
          type="file" 
          id="fileInput"
          className="input"
          accept=".jpeg,.jpg,.png,.gif"
          onChange={updateBase64Data}
        />
        <button onClick={update} disabled={!isValid} >提交</button>
      </div>
      <div className="output">
        <div className="preview">
          { 
            imgBase64Data && <img src={imgBase64Data} alt="" />
          }
        </div>
        <div>
          {content}
        </div>
      </div>
    </div>
  )
}

export default App