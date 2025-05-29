# 大数相加

- 高精度
  js Number 类型， 不分整数、浮点数、高精度...
  js 不太适合计算  python适合
  表现力强
- 大数字
  超过 Number 类型的范围， 无法精确表示， 只能近似表示
  边界问题
  Infinity 无穷大  -Infinity 无穷小
  Number.MAX_VALUE 最大值  Number.MIN_VALUE 最小值
- 字符串化

- es6 bigInt 大数类型

## BigInt 类型
    安全值 上限 Number.MAX_VALUE 最大值:2^53 - 1  
    Number.Max_SAFE_INTEGER == 9007199254740991  16位 
    es6 中新增的第六种**简单数据类型** 
    声明bigint:
        1. 后面加n
        2. BigInt("123"),不能new BigInt("123"),他是一个内置函数，没有构造器，是简单数据类型
    特点：
        1. 不能和其他类型进行运算，必须是bigint类型
        2. 可以和其他类型进行运算，但是会丢失精度
        3. 无限大，无溢出问题
        4. 使 js 适合大型项目开发
        
