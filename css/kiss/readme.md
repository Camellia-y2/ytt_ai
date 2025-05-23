# css animation

- html
  div
  眉毛
  嘴巴
  小酒窝
- css
  ? 在一起？
  border-radius 头 圆
  animation 世界

- html结构快捷输入方式 
  div#l-ball.ball  emmet 语法 基于 css 选择器
- id 唯一
- class 类名
- .container?
  盒子 页面居中
  水平垂直居中
- .container>#l-ball.ball+#r-ball.ball
  > 子元素选择器
  + 相邻兄弟选择器

- display 属性
  block 块级元素：div h1 h2 h3 h4 h5 h6 p ul ol li(每个元素占一行，可以设置宽高)
  inline 行内元素: span a img input button(不可设置宽高)
  inline-block 行内块元素 (可以设置宽高 可以在一行)
  display 切换行内块级的格式化上下文能力

- 面向对象的css
  多态
  复用  多类名

- 定位
  - position 定位
    static 静态定位  默认值（没有定位能力）
    relative 相对定位 (相对于自身+让他的子元素相对于他定位)
    absolute 绝对定位 相对于父元素(找到离他最近的position 不为static 的定位，直到 body 为止)
    .container absolute body
    
    