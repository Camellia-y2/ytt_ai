# 受控组件和非受控组件

- 聚焦于表单 收集用户的数据
    - 受state控制
       - value={state} onChange={(e) => setState(e.target.value)}
       - 性能开销大
       - 应用场景：
           1. 表单数据检测，防抖节流
    - 非受控
       - 另外一种 收集用户输入的方法
       - 性能好 交互不强的