# 手写 扁平化数组

数组扁平化，就是把一个多维数组转成一维数组。

- 递归
    记忆模块构建
    - Array.isArray()
    - 递归本质： 把大的问题分成最小问题，抽象
        res.concat(flatten(item))
    - 递归终止条件： 当item不是数组时，直接返回res
- reduce
- 栈模拟
- es6 flat新方法
- some