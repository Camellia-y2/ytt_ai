# tts 智能语音

## 智能前端  AI用户体验
- webllm
  AIGC api remote call
- tts 语音
  网易云音乐
  音乐不要自动播放，社死
  用户决定要不要播放

## 如果 不能做 DOM 编程，react 里面怎么播放音乐？
- 原生js DOM API 低效  document.querySelector() 不用
- audio 播放？

## 路径
- 相对路径
  ./ 同一级别
 ../ 上一级
 ./demo/ 走
- 绝对路径
  物理路径 C:/
  网站根路径 /   访问的是index.html首页
  - http://localhost:5173/sounds/snare.wav
    - npm run dev 
    - 本地服务器 http://localhost:5173 === http://127.0.0.1:5173
    端口背后对应的是不同服务
    - index.html  根目录  首页
    - public  静态资源目录  可以访问
        - 约定所有的资源可以直接访问
- react
    启动一个http服务，在端口5173启动，入口文件为index.html

## react 事件机制
 - 不会去用 addEventListener DOM Event 来绑定事件
 - onClick  react 事件机制， 和 html 原生支持的事件有点像

## 小红书的 event 事件机制   《JavaScritp 高级程序设计》  1000+页
- 多种事件机制
  - DOM0 事件
    onclick  html 属性 缺点是耦合了。不推荐。
  - DOM2 事件
    addEventListener  事件  html 和 js 事件上分离
  - react 
    采用了DOM0的方式，有利于组件 html 的表达  好读
    Vue 中，@click 表示事件监听。 react 优于 vue。
    API 层面上看过去是这样的，其实底层还有天地 

## useRef
- 可以帮助我们在 react 中拿到 DOM 对象
  - useRef(null)  初始值为null，空对象
    - current 属性 指向的是DOM对象
    - 怎么绑定？ jsx中 ref={ref}  绑定到DOM对象上
    - ref.current  拿到DOM对象