import { useState } from 'react'
import PictureCard from './components/PictureCard'
// uploadImage 太长了 -> generateAudio 模块化 -> 复用 -> lib(library 库)/audio.js
import {generateAudio} from './lib/audio.js'
import './App.css'

function App() {
  // es6 模版字符串支持多行
  const picPrompt = `
    分析图片内容，找出最能描述图片的一个英文单词，尽量选择更简单的A1~A2的词汇。
    返回JSON数据：
    {
      "image_description": "图片的描述",
      "representative_word": "最能描述图片的一个英文单词",
      "examples_sentence": "结合英文单词和图片描述，给出一个简单的例句",
      "explaination": "结合图片解释英文单词，段落以Look at...开头，将段落分句，每一句单独一行，解释的最后给一个日常生活有关的问句？",
      "explaination_replys": ["根据explaination给出的回复1","根据explaination给出的回复2"]
    }
  `
  // 父组件负责持有数据状态并传递数据给子组件
  const [word, setWord] = useState('请上传图片')
  const [sentence, setSentence] = useState('');
  const [explainations, setExplainations] = useState([]);
  const [audio, setAudio] = useState('');
  const uploadImage = async (imgData) => {
    // console.log(imgData,'来自父组件的打印');
    setWord("正在分析中...")
    const endpoint = 'https://api.moonshot.cn/v1/chat/completions';
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${import.meta.env.VITE_KIMI_API_KEY}`
    }
    const response = await fetch(endpoint, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        // vision 可视 图片
        model: 'moonshot-v1-8k-vision-preview',
        messages: [
          {
            role: 'user',
            content: [
              {
                type: 'image_url', // 告诉大模型 我上传的图片是Base64编码的
                image_url: {
                  "url": imgData,
                }
              },
              {
                type: 'text',
                text: picPrompt // 提示词 告诉大模型 你需要做什么
              }
            ]
          }
        ]
      })
    })
    const data = await response.json();
    console.log(data);
    const replyData = JSON.parse(data.choices[0].message.content);
    setWord(replyData.representative_word);
    setSentence(replyData.examples_sentence);
    const audioUrl = await generateAudio(replyData.examples_sentence);
  }

  return (
    // JSX react 优势 方便写HTML模版
    <div className='container'>
      {/* 自定义组件 子组件 */}
      {/* 组件 html css js 沙子一样 组合起来 图片上传功能
          模块化了 就可复用 页面由dom树 -》组件树
      */}
      <PictureCard 
        uploadImage={uploadImage}
        word={word}
        audio={audio}
      />
      <div className='output'>
        <div>{sentence}</div>
      </div>
    </div>
  )
}

export default App
