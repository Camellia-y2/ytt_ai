# 回流重绘
- 布局的难点 列式布局和理解BFC(Block Formatting Contexts)/FFC(Flex Formatting Contexts)
    - html 根元素 最外层的一个BFC元素 块级从上到下，行内从左到右
    - 有了文档流
- flow overflow:hidden flex
- 有没有什么标签 可以做列式布局 table 可以做
   tr td
- 为什么不用？
    - 触发太多的回流和重绘
    - 语义不符 table 列数据
       tr row
       td column
    - 不够灵活 
    
## 回流和重绘
- 回流 重排reflow
    - 当 RenderTree 中部分或全部元素的尺寸、结构或某些属性的改变时，浏览器重新渲染部分或全部文档的过程叫回流。
    table 不适合， table 中布局的改变会影响整个table的布局， 会触发整个table的回流
    火烧赤壁
    - 如何触发回流：
        - 1. 页面首次渲染 -> 有最耗时
        - 2. 浏览器窗口大小改变
        - 3. 元素尺寸、位置、内容发生改变 （transition,transform/opacity 新图层除外）
        - 4. 元素字体大小变化
        - 5. 添加或者删除可见的DOM元素 appendChild removeChild
        - 6. 激活CSS伪类（例如：:hover）
        - 7. 查询某些属性或调用某些方法
            - img.getBoundingClientRect()  元素的位置和尺寸信息 会触发回流，重新计算
        - 8. 浏览器的resize事件
- 重绘 repaint
    - 当元素的外观发生改变，但没有改变布局，不影响它在文档流中的位置，例如 color background-color visibility （hidden show)


- display：none 不参与回流重绘（在渲染时就会直接把该DOM节点移除 不在文档流） 是性能优化的一种方案

## 页面是怎么渲染的？
- 输入url
- 下载html
    - 下载文档流 字节码(二进制流)
    - html 字符 使用 utf-8 编码 转成html文本
    - 解析 html  根据开关标签，属性。。。
    - 节点对象
    - 构建DOM树 （有标签节点、文本节点）
- link css 下载css
    - 下载字节码 Content-Type text/html  text/css
    - 编码 utf-8 转成css文本
    - tokenization 分词  词法分析 
    - css rule 节点
    - CSSDOM树
- 构建RenderTree （DOM树 + CSSDOM树）
    - 构建RenderTree （DOM树 + CSSDOM树）
- Layout树
    - 布局 计算每个节点的位置和大小（回流）
- 分层
    - z-index
    - position:fixed 
    - transition + transform / opacity
    - animation
    - translate3d(50%,50%,50%) 启动GPU加速
    一个图层 主要文档流图层 = DOM树 + CSSOM树 -》 RenderTree <-> Layout树
    2个图层 = DOM树 + CSSOM树 -》 RenderTree <-> Layout树
    - 图层的合并
    - 浏览器的渲染引擎 绘制平面 像素点绘制
