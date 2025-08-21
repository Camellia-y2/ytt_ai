import { aMessage } from './a.js';
import Hello from './Hello.jsx';
// 引入css文件
import './main.css'

document.getElementById('app').innerHTML = `
    <h1>webpack</h1>
    <p>${aMessage()}</p>
`
