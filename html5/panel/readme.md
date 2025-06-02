# Github 最受欢迎 50 projects 50 day
- html 结构
- css
    box-sizing: border-box;
        border-box ：当设置 box-sizing: border-box; 时，
        设置的 width 和 height 属性值包含了内容区域、内边距和边框的总宽度和高度。
        设置的就是实际宽高。
        外边距依旧在这个计算范围之外 

        content-box ：这是 box-sizing 的默认值。
        当设置元素的 width 和 height 属性时，这些值仅适用于元素的内容区域。
        元素的实际宽度和高度需要加上内边距、边框和外边距 
- 布局
    - 居中
         position：absolute(定位元素) + transform:translate/rotate/scale(自身 移动)
    - 5个元素的一行布局
- js交互

1.合适的标签 BEM 类名
2.弹性布局的居中方案
    - body: 高度由子元素撑开
    - flex 是移动端时代 （之前 PC 时代）新的布局方式
         弹性的布局格式化上下文 display:flex
         - align-items:center; 侧轴
         - justify-content:center; 主轴
         - .container 居中
         - 父元素和子元素们之间的布局方案
            - 子元素们不会换行
    - 100vh 相对视窗的高度 == 100% view height 解决了不同设备宽高不同
         view height 视窗高度  
         view width 视窗宽度

- 前端核心用户体验
    - 和谐
    - 艺术性，充满期待
    transition:0.3s opacity ease-in 0.4s;
    - 让用户尖叫的体验