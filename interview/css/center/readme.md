# 居中

- 听清什么居中？
    - 水平垂直居中
    - 水平居中
    - 垂直居中
- 方法不是关键，区别和优劣才是重点
    - 水平居中 text-align
    - 单行文本垂直居中 line-height = height \ padding = 20px 0; 
    - **固定宽高块级盒子** 水平垂直居中 
        - absolute + margin 负值 ->（缺点：需要知道盒子宽高） 
        - absolute + margin: auto
        - absolute + calc(50% - 自身宽高的一半) (css calc 计算函数) -> 缺点：性能差，每次计算要重绘重排，且要知道盒子宽高，很少用
    - **不固定宽高块级盒子** 水平垂直居中
        - absolute + transform: translate(-50%, -50%)
        - absolute + left: 0; top: 0; right: 0; bottom: 0; + margin: auto;
        - line-height: initial (最初值，不要继承，父元素要有高度，盒子里面加的是文字（inline-block）) + vertical-align: middle;
        - writing-mode 文字书写方式
            - 父元素 writing-mode: vertical-lr; (文字垂直显示)
            - 子元素 writing-mode: horizontal-tb; (文字水平显示)
        - display: table-cell 
        - flex 布局
        - grid 布局
            - 父元素 display: grid;
            - 子元素 align-self: center; justify-self: center;








