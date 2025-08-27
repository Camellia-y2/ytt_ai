# map weakmap

- es6新增的数据结构 作为企业级大型语言需要的内置数据结构
- key 可以是对象
- map(强)，weakmap(弱)

## 垃圾回收
- 也是一套程序，也是语言底层的关键机制
- 内存的动态分配，由操作系统管理
- 引用计数 不为0，就不会回收
- map 强引用，不会被回收
    - 设置 key = null, map = null 来释放内存
    - global.gc() 手动触发垃圾回收  node --expose-gc 1.js为运行方式

- Map 和 Set 需要手动考虑内存的开销
    - WeakMap, WeakSet 弱引用自动实现
    - global.gc()
- weakmap 弱引用，会被回收