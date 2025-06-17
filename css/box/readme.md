## 盒子模型

- 文档流
    - doctype 
    - 从上到下（块），从左到右（行内），像水流一样显示我们的页面 =》 流体布局
    - html 标签 从外到内（层级），从上到下（盒子能力） 从左到右（布局）

- html 元素的时候，一个盒子

- 盒子，页面的占位就清楚了。
    - 盒子的尺寸 由哪些部分构成？
        - 内容 width × height 
        - 内边距 padding
        - 边框 border
        - 外边距 margin
    - 页面怎么显示的？
        - 将元素和css一起结合， 了解他作为一个盒子，在文档流中的大小和位置。
        - 标准盒模型（W3C 盒模型）：
           - 在标准盒模型中，元素的总宽度和总高度的计算方式是：
           - 总宽度 = width（内容宽度） + padding（内边距） + border（边框） + margin（外边距）；
           - 总高度 = height（内容高度） + padding（内边距） + border（边框） + margin（外边距） 。
           - 在现代浏览器中，默认使用标准盒模型。

        - 怪异盒模型（IE 盒模型）：
           - 怪异盒模型中，width和height属性**包含**了内边距和边框的尺寸，即元素的
           - 总宽度 = width（内容宽度 + 内边距 + 边框） + margin（外边距）；
           - 总高度 = height（内容高度 + 内边距 + 边框） + margin（外边距） 。
           - 可以通过box-sizing属性来指定盒模型的类型，box-sizing: content-box;
           - 表示使用标准盒模型（默认值），box-sizing: border-box;表示使用怪异盒模型。

- 布局
    - 多列式
- 页面的实现 = 文档流 + 页面布局 （弹性、浮动。。） + 盒模型（标准，怪异）+ 脱离文档流 ( float,position:absolute )

- z-index: z-index 是CSS中控制元素堆叠顺序的重要属性
    - 基本概念：
        - 用于控制定位元素（position非static）的垂直堆叠顺序
        - 数值越大，元素越靠前显示
        - 默认值为auto（相当于0）
    - 使用要点：
        - 只对定位元素有效（absolute/relative/fixed/sticky）
        - 父子元素的z-index相互独立
        - 相同z-index时，后出现的元素在上层
        - 可以设置负值让元素位于背景下方
    - 应用场景：
        - 模态框/弹窗
        - 下拉菜单
        - 卡片重叠效果
        - 固定导航栏

- 居中布局
    -  top: 50%; + left: 50%; 
        - + transform: translate(-50%,-50%);
        - + margin-left: -25px; + margin-top: -25px; (要明确知道盒子的尺寸)
    -  flex: 1; + justify-content: center; + align-items: center;