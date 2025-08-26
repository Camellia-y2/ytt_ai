# 性能优化

## 重绘重排

- 重绘
    当元素样式改变但不影响布局是，浏览器重新绘制元素的过程。如改变颜色、背景等。
- 重排
    DOM元素的尺寸、位置发生变化时，浏览器需要重新计算布局，影响其他元素位置的过程。如改变元素宽度、高度、位置等。

- 联系：重排一定会触发重绘，重绘不一定触发重排

### DEMO 1 —— 批量修改DOM
#### element.style.cssText 将 css 样式作为字符串赋值
```js
    // 不对 多次操作可能触发多次重绘重排
    // 虽然现代浏览器会合并修改，优化
    // 但是可以避免
    const el = document.getElementById("myEl")
    el.style.width = "100px"
    el.style.height = "100px"
    el.style.margin = "10px"
    // good
    el.style.cssText = 'width:100px; height:100px; margin:10px'
    el.className = 'new-class' // 用类名而不是一堆js修改样式
```

### Demo 2 —— 批量添加元素

#### 使用文档碎片优化
```js
const fragment = document.createDocumentFragment()
for (let i = 0; i < 1000; i++) {
    const li = document.createElement('li')
    li.textContent = `item ${i}`
    fragment.appendChild(li) // 没有重排重绘
}
document.getElementById('myList').appendChild(fragment)
```

### 脱离文档流进行操作 下线
```js
const el = document.getElementById('myEl')
el.style.position = 'absolute'
el.style.display = 'none'
// ...进行大量DOM操作

el.style.display = 'block'
el.style.position = 'static' // 取消定位
```
### 缓存布局信息
```js
// offsetTop 是 DOM 元素的一个只读属性，用于获取当前元素相对于其最近的已定位祖先元素（offsetParent） 顶部的距离，单位是像素
// offsetTop 读取，但是每次都会触发重排以获得盒子的布局信息

// 原来的
for (let i = 0; i < 100; i++) {
    el.style.top = el.offsetTop + 1 + 'px'
}

// 性能优化：缓存初始布局信息
let initialTop = el.offsetTop
for (let i = 0; i < 100; i++) {
    initialTop ++
    el.style.top = initialTop + 'px'
}
```

### 使用transform 代替位置调整
- 对于复杂动画，可使用 transform（如 translate）替代修改 top/left，因为 **transform 由 GPU 处理，不会触发重排。**
```js
el.style.left = '100px'
// 只触发重绘 性能更好
el.style.transform = 'translateX(100px)'
```


## 资源加载优化
- 图片懒加载
- 路由懒加载
    代码文件上使用动态导入 code spliting 代码分割
- 资源预加载
    提前加载未来会用到的资源
    ```html
    <link rel="prefetch" href="/next-page.js">
    <link rel="preload" href="https://example.com/image.jpg" as="image">
    ```
    - dns-prefetch dns预解析
    - preload 当前页面必须资源，立即加载
    - prefetch 未来可能会用到的资源，浏览器空闲时加载
    - script 资源的加载
        - 默认没有
        - async 脚本在后台下载，异步加载，不阻塞页面渲染。下载后立即执行。
        ```html
        <script src="script.js" async></script>
        ```
        - defer 延迟加载，等页面渲染完再执行。等html解析完再执行。
    - webp 格式图片
        图片的优化，显著的减少体积，并质量不受影响
    - 图标字体库
        减少http请求数量
## JS执行优化
- 防抖节流
- web workers 多线程处理复杂计算
- requestAnimationFrame 动画优化
- requestIdleCallback -- react fiber架构 (使用的是MessageChannel,但思想是一样的)
    schedule 调度器

## 框架层优化
- memo，useMemo，useCallback 避免不必要的渲染
- shadcn-ui 按需加载组件库
- 合理使用 key 优化列表渲染

## 缓存策略
- 强缓存和协商缓存
    Expires（客户端时间不准确） / Cache-Control 不发送请求
    LastModified if-modified-since 时间戳 304
    ETag if-none-match 校验字符串 304
- loaclStorage/sessionStorage/cookie

## 网络优化
- CDN加速
    内容分发网络，将静态资源分布到多个节点，用户请求就近访问，减少延迟。
    会缓存文件。
    多路复用，多域名服务器，如 img1.baidu.com img2.baidu.com
- Gzip压缩
- HTTP/2 多路复用
- DNS 预解析

## 首屏优化
- SSR 服务端渲染
    组件渲染在服务器端已经完成编译、执行，再发送给客户端。浏览器端直接显示。
- CSR 客户端渲染
    客户端渲染，将页面的内容在客户端渲染好。
- 骨架屏
- http/2.0 server push 服务器端推送
    服务器端可以主动推送css、js、图片等资源给客户端，减少客户端请求次数。

## 性能测试
- chrome的performance面板
    可以看到各项性能指标，针对性的优化，给出优化建议
- 减少首屏js/css体积 （code spliting）
    代码分割（Code Splitting）是一种将代码库拆分成更小、更易管理的块的技术，以便按需加载或并行加载，从而优化应用的加载性能和执行效率。
- 使用transform代替位置调整，预加载相关资源
    掘金的js由什么构成 -> (vue + vue Router) + App.vue + Home.vue + Components 
    (vue + vue Router) 单独拆分，缓存，基本是不会变的
    App.vue + home.vue + Components 会经常改，业务代码，单独拆分，缓存
    做了一次升级

- lightHouse
    是chrome的一款性能打分插件，会在性能、无障碍、最佳实现、SEO 四个方面打分，对比给出问题和优化建议，非常细致
    - 图片大小优化 webp
    - 字体库
    - 渲染屏蔽需求

## 性能关键指标
- FCP (First Contentful Paint) 首次内容绘制
    首次渲染内容的时间，即浏览器从开始加载到首次渲染出页面中的所有内容的时间。
- LCP（Largest Contentful Paint）最大内容绘制
    最大内容绘制是衡量网页加载性能的关键指标，表示页面中最大可见内容元素（如图片、视频或文本块）完全渲染完成的时间。
