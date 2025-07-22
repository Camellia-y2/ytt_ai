# 性能优化hook

- 父子组件渲染顺序
    - 执行的时候，先外到内，是组件树
    - 完成渲染，完成组件的挂载，先内到外
- Button 组件该不该重新渲染？ 不该
    - 父组件的局部，count的改变和button组件没有关系
      Button JSX 不重新渲染 省掉重绘重排的过程

    - 要性能优化
        响应式和性能 非常好
        切分组件
        组件之间独立
        子组件 React.memo
        createContext useContext 所有的状态全部给一个Context好吗？ 不好
        性能不好，所有状态是通过一个reducer生成

- 组件划分的粒度
    - 组件拆分 单向数据流
    - 就负责渲染的子组件（props + jsx）
    - 复用，好管理之外，还要提升性能
    - 状态更新之后 组件函数要重新运行
    - 用useCallback 包裹 组件函数 + React.memo 包裹组件