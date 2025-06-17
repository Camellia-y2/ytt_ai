# localStorage



- 全局安装
  - npm install -g stylus
  - stylus --version
- stylus 何物？
  - 是一个css预处理器
  - 更快，更专业
  - .styl 后缀的文件
  - 编译成css

- stylus 是 css 的超集 （但是浏览器只认css）
  - 可以使用css的所有语法
  - 可以使用css的所有选择器
  - 可以使用css的所有属性

- box-shadow 盒子的立体感觉
   box-shadow: 0 0 0 10px rgba(0,0,0,0.5);
    - 0 0 ：表示阴影在X和Y轴上没有偏移
    - 0 ：表示阴影模糊半径为0（无模糊效果）
    - 10px ：表示阴影扩展半径为10像素
    - rgba(0,0,0,0.1) ：表示阴影颜色为黑色，透明度为50%

- background 属性
  - background: url(./img/1.jpg) no-repeat center center;
    - url(./img/1.jpg)：指定背景图片的路径。
    - no-repeat：指定背景图片不重复。
    - center center：指定背景图片的水平和垂直位置为居中。
    - 可以使用其他值来调整背景图片的位置，例如：
        - top left：将背景图片放置在容器的左上角。
        - bottom right：将背景图片放置在容器的右下角。
        - 10px 20px：将背景图片的水平偏移为10像素，垂直偏移为20像素。

- background-size属性
    - cover ：自动缩放图片以完全**覆盖（铺满）**背景区域，多余的剪裁，保持图片原始比例
    - contain ：自动缩放图片以完全**适应（可以不铺满，要在背景区域完全显示图片）**背景区域，保持图片原始比例
- css 继承
    - 有些属性可以直接继承（字体颜色），有些属性不能直接继承（背景颜色，box-sizing(所以用通配符选择所有选择器) ）
    - 每个都要写一遍 无法接受
    - 默认16px 颜色黑色
    - body color 子元素可以继承

- css 如 js一样
    - 模块特性
       tab 缩进 自动补全 css 前缀
       模块和作用域的概念

- viewport 视口
    <meta name="viewport" content="user-scalable=no">
    它指示浏览器不允许用户通过缩放来改变页面的显示比例，确保网页在移动设备上以设计师或开发者设定的最佳视图展示，保持布局的一致性和设计意图的完整性。