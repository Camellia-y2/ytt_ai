# 微信当家框架WEUI

## BEM 国际命名规范
- 项目 .weui-page 
    - button 页面
规范
- Block 概念
   一块内容 项目代号 风格 + 可复用的代码
   项目代号 + 区块的作用或职责 page
   .weui-page 微信
   .tm-page 天猫

- Element(元素__) 概念
    元素  __header 
        块__
    同一块中概念不重叠
    .weui-page__title
    .weui-page__desc

- UI **框架**中button , input, cell, 通用的组件（可复用）
    可以重启BEM命名
    .weui-btn **复用** 
    业务代码？
    大厂
    基础架构代码 学习WEUI的源码

    几个block组合起来，页面就出来，组件式开发
    .weui-input
    .weui-cell(胶囊)
- Modifier(状态_) 概念
    状态  _disabled
    是属于block的，属于element的：.weui-btn_primary  .weui-btn_default
    同一块中概念不重叠
   .weui-btn _disabled
   .weui-btn _primary
   .weui-btn _warn
- BEM 规范让我们一起大厂协作
    - 页面由blocks构成 .weui-{block}
    - block包含一些elements .weui-{block}__{element}
    - element包含一些modifiers .weui-{block}__{element}_{modifier}