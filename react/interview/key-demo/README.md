# react 面试基础考点

- JSX map ? 为什么需要唯一值key?
    - todos 响应式状态改变了，界面更新
        - map 返回新数组，要重新渲染
        - 热更新
        - 更新第一项，只有第一个改变了，只热更新第一项，后面的直接复用。
        - 插入新元素到第一项，后面的都要重新渲染。耗性能。

    - 解决：key 唯一值 （唯一标识）

    - 旧状态 新状态 在内存
    - 比较diff 差值 让界面更新

    - 基于索引来比较：旧状态第一项和新状态第一项比较，第二项和第二项比较。。。
        - 索引key默认**按顺序**来，而不是属性id，所以要指定key={id}，让key和id绑定，这样就可以根据id来比较了。
    - 为什么不能用index作为key？（map的第二个参数是index）
        - 数组item顺序发生改变的时候，浪费更新
        - 数组的开始插入新元素