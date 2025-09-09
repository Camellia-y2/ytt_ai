# React Fiber 机制

- 组件比较多的时候，组件树（树状组件）的深度比较深，
    每个组件都需要经历 JSX的模版的编译、VDOM 的创建、响应式的声明、生命周期、挂载等，

    怎么办？核心问题是什么？
    React组件渲染是同步代码，更加重要的没机会做
    打断一下，让浏览器响应用户更优先的先做一下，到时候再回来接着执行。

- fiber 机制是 react 16 版本引入的重写核心算法，实现了可中断渲染。

    - 学习过什么 api 类似 fiber
        可打断可持续
        requestAnimationFrame
        requestIdleCallback
    
    - requestAnimationFrame
        是浏览器提供的用于在下一次重绘之前执行动画代码的API，它能确保动画流畅运行并节省资源。
        1s 执行60次

    - requestIdleCallback
        - React 组件渲染低优先级任务
            不能往死里干，需要被中断
        - 更高优先级的任务是用户的交互

        - react 组件树 渲染任务拆分
            在一个时间切片里能执行
            这个时间长度用 requestIdleCallback 来描述的
            会一直去问还有多少可执行时间

## 总结一下
- react 组件多，组件数深度深，渲染耗时，复杂
- 使用 requestIdleCallback 中断渲染
- 优先响应界面交互和核心任务
- 当再次idle后，继续执行渲染任务
- requestIdleCallback 时间不定， 16.67ms（刷帧）- 优先任务的耗时 = 本次执行时间
- 没有fiber react组件一多，就会卡， fiber 解决性能问题，主要通过中断渲染，保障用户交互流畅，解决大型应用阻塞主线程的问题
- fiber 节点，react 渲染的工作单元

## Render 分成两个阶段
- 渲染阶段 构建新的虚拟dom树， diff patches[]
- 提交阶段 把差异应用到真实dom上

## diff 算法
- 两棵树做 diff，复杂度是 O(n^3) 的，因为每个节点都要去和另一棵树的全部节点对比一次，这就是 n 了，如果找到有变化的节点，执行插入、删除、修改也是 n 的复杂度。所有的节点都是这样，再乘以 n，所以是 O(n * n * n) 的复杂度。
- diff 算法：同层级比较（时间复杂度O(n)） 
    - ABCDE  EABCD
    dom 开销比较大，需要对比每个节点的变化。
    diff 算法除了考虑本身的时间复杂度之外，还要考虑一个因素：dom 操作的次数。
    移动操作 比 新增 + 删除操作要少，所以diff算法会优先考虑移动操作。

    ABEC   ABC
    - 处理新增节点：（找不到相同key）
        newChildren[i] => 如： const newItem = document.createElement('li') 当前新增
        newChildren[i - 1] -> B
        newChildren[i].nextSibling -> C
        将新生成的节点E插入到C前面-> insertBefore(newChildren[i], newChildren[i].nextSibling)
