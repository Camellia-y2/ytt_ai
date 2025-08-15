# position

- 教科书式的表达

- 五种属性 准确，简洁
    - static 默认值，不定位，回到正常文档流。让之前定位的元素，回到文档流，**取消定位**。
        - 场景：取消定位
    - relative 相对定位 相对自身原位置偏移，不脱离文档流
        - 场景：微调位置
    - absolute 绝对定位 相对于最近的非static定位的**祖先元素**定位，脱离文档流，如果没有，那么相对body定位
    - fixed 固定定位 相对视窗定位，脱离文档流
    - sticky 粘性定位 是一种css定位方式，当元素到达某个阈值前，表现的像**相对定位**，到达阈值后固定在视口中。实现类似吸顶或吸附的效果

- 业务场景
    - 结合relative + absolute 消息提醒，在右下角。子绝父相。
    - absolute + transform 水平垂直居中 模态框
    - fixed 回到顶部 聊天客服图标
    - sticky 粘连导航 不管页面多长，导航在超出**其最近的具有滚动机制的祖先元素**阀值后，就固定在那里不动。
        table表头粘连 距离最近的具有滚动机制的祖先元素
        和 intersectionObserver 实现滚动监听 有点像（懒加载）

- 底层
    - 定位参照系
        absolute 最近position !== static 的祖先 || body
        fixed 视窗 ? bug
        sticky 最近的具有滚动机制的祖先元素 依赖滚动元素
    - 独立图层渲染
        触发硬件加速，提升独立图层渲染，有利于css 页面性能优化
        但也不能乱用，过多的图层会增加内存和管理开销：比如——登录弹窗，transform/opacity 动画
        absolute + transform: translateZ(0) 
        或
        absolute + transform: translate3d(0, 0, 0)

        will-change:  可以触发独立图层

- position: fixed 如果在 transform: translateZ(0) 下面，会失效
    transform 会有一个新的包含块， fixed 不再相对于视口定位，而是相对于这个 transform 容器

- 打麻将 每道题都有惊喜 刺激 面试是当面展示自己，可以准备的

## position 回答技巧
先干净利落回答五种特性，再举出应用场景，提底层原理，图层和 fixed 失效亮点

- 引导
    - 页面渲染的过程
    - intersectionObserver
    - 重绘重排



