# 数组上的方法

## 分维度来回答，带上业务场景

- 是否修改原数组，非纯函数，有副作用，要慎用
    push/pop/shift/unshift 栈/队操作
    shift/unshift：中间插入  性能差，需要移动元素（数组是连续的）
    - splice：删除/插入（新增）/替换 
        splice(start,deleteCount,item1,item2...)
        start：开始位置
        deleteCount：删除的元素个数(如果为0就为新增，不为0就为替换)
        item1,item2...：新增的元素（没有则为删除）
    - sort:排序
      会修改原数组，并且返回值也为排序之后的原数组
      排序规则：
        升序用a-b：左减右，正就换，负不换（左边大就换，左边小就不换，凑成从小到大）
        降序用b-a：右减左，正就换，负不换（右边大就换，右边小就不换，凑成从大到小）

- 不会修改原数组的方法，纯函数，推荐多用
    - forEach 无返回值
    - map 有返回新数组
    - 查找类
      es5 提供了indexOf/lastIndexOf
      es6 提供了find/findIndex/findLast/findLastIndex(es15)/includes
      - find:查找 遍历元素，返回第一个使回调函数返回真值的元素索引，否则返回undefined
      - findIndex:查找索引 遍历元素，返回第一个使回调函数返回真值的元素索引，否则返回-1
      - findLast:查找最后一个 从数组的末尾开始遍历，返回第一个使回调函数返回真值的元素，否则返回undefined
      - findLastIndex:查找最后一个索引 从数组的末尾开始遍历，返回第一个使回调函数返回真值的元素索引，否则返回-1
      - includes:查找是否包含 遍历数组，判断是否有元素满足回调函数的条件，返回布尔值

    - concat:拼接
    - slice:截取
    - indexOf/lastIndexOf:查找
    - 过滤
        filter:过滤 遍历数组，返回所有使回调函数返回真值的元素组成的新数组
    - 判断
        every\some
    - 迭代器
        keys()：返回键名的遍历器
        values()：返回键值的遍历器
        entries()：返回键值对的遍历器
        forEach()：使用回调函数遍历每个成员
    - join 拼接 toString
    - 归约 reduce
    - 静态方法
        Array.isArray()：判断是否为数组
        Array.from()：将类数组对象或可遍历对象转换为数组
        Array.of()：将参数转换为数组
     
- es6新增方法
- 遍历/查找类/转换类/拼接类/统计类