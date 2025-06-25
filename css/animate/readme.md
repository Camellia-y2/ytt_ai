# 动画

- transition 过渡
- transform 变换
- animation 关键帧动画
- js
    - 捕获 dom 对象
    - 频繁修改 dom 节点的 style 属性
    -  requestAnimationFrame 是浏览器提供的动画API，它会在浏览器重绘之前调用回调函数，从而实现流畅的动画效果。
        - 语法 ：
            - requestAnimationFrame(callback)
        - 语义：
            - 请求 动起来 帧
            - dom 动画和屏幕的刷帧率一致 + 递归
        - 功能 ：
            - 在下一次浏览器重绘前执行回调函数
            - 比 setTimeout 更高效，与浏览器刷新率同步
            - 当页面不可见时会自动暂停，节省资源
- web 程序
    - 浏览器程序 c++
    - 输入是html css
    - 输出 静态页面 页面完成渲染
    - domContentLoaded 事件还没有完成页面渲染
        - 当 DOM 内容加载完成后触发，不包括样式表、图片等资源的加载
        - 可以使用 window.addEventListener('DOMContentLoaded', function() {}) 来监听该事件
    - setTimeout(()=>{},0) 会以页面渲染优先
- js 动画 和 css transition 动画选择哪一个？
    - js 复杂 但 性能差？ 不推荐这么做动画
        - 要频繁的操作dom js 性能开销的主要问题  页面要重新绘制
    - css 简单 但 性能好（transform 和 opacity）
        - 比 js 省去了dom对象的操作
        - transition 不用去不停的绘制？ 真不会那么像js一样触发那么多次的重新绘制。

- 浏览器是 c++ 写的，是多线程的

- DOM 树的构建
    - 字节码开始，网络层的传输
    - 转换 根据编码 utf-8, html字符串
    - 令牌化 令牌 标签名 属性
    - 转换成 dom 节点
    <div id="box">
        ...
    </div>
    {
        type: 'div',
        attrs: { id: 'box' },
        children: [...]
    }
    - 完成 DOM 树的构建 与树 数据结构的结合，在查找和操作这一块，非常的高效，作为render的输入

- CSSOM 树的构建

- DOM 树 和 CSSOM 树的合并 生成 渲染树（render tree）
- Layout 布局 BFC 盒子模型和大小计算：这个盒子在哪里？
    - 计算文档流的位置和大小，计算在屏幕上的确切位置
    - 应用规则和计算的过程
    - 平面的

- 图层 z-index 离开文档流 absolute transform opacity...
    - 会用新的图层来计算和绘制 (修改的时候只要改这一个图层，性能会好一点)
    - 新图层 用GPU去计算 性能好

- 绘制过来 画图
    - 像素点

- 实现第一次的绘制
- JS 使它更新？ transition
    - 比如：JS修改了背景色 就要重绘 性能可以
    - 如果改变的是盒子的位置 就要重新布局 性能差 开销大 
         - js width 改变就可能触发几百次的重新布局
    - transition left 的修改，position:absolute; 离开文档流