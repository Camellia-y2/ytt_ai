import React from 'react';
import { createRoot } from 'react-dom/client'
import { aMessage } from './a.js';
import Hello from './Hello.jsx';
// 引入css文件
import './main.css';

const root = createRoot(document.getElementById('app'));
root.render(
    <>
        <h1>webpack</h1>
        <p>{aMessage()}</p>
        <Hello />
    </>
);