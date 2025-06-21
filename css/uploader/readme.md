# uploader 大厂必考

- 源码学习是核心
   - 高质量的代码和技巧
   - 思维方式
- 技能点
   - 语义化标签
   - BEM 命名规范
   - 弹性布局
   - stylus 变量，模块化
   - 伪元素
- weui-uploader 源码
   - weui-uploader 外面严谨的套上了 .weui-cells
   - .weui-cells 移动端手机用户数据或操作表单表格
      - .weui-cell  每个表单元素
         -.weui-cell__bd  表单元素的内容
- webkit-overflow-scrolling: touch;
   - 滚动更敏感，感知touch操作（滚动时触摸停下滚动，滑动的力度，参考微信聊天页面）
   - webkit 实验阶段
      - Chrome 浏览器内核的代号 使用起来 （有些浏览器不能用）
      - 移动端没有微软 就是苹果和安卓（都是基于webkit的内核）
- 变量组成了 weui 的主题风格

- stylus中
   - &::before 伪元素：很小的东西，不用html标签，如 > 箭头，小点，上下边界线
   - & 表示选中它的上一级元素（不缩进，缩进代表父元素的下级，&表示上一个的同级）
   - 伪类 伪元素

- float 布局
   - 早于flex的布局方案
   - 会脱离文档流
   - float:left, float:right; 左浮动 右浮动 两列式
   - 一直 float:left; 多列
   - 如果一行不够，自动换行   