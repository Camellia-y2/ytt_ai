//
// "hello".length 有面向对象式写法
// 没有函数式写法 len("hello")
// 背后魔法
// JS 面向对象的统一写法
// 数组对象
['h','e','l','l','o'].reverse()

// "hello" -> new String("hello") //字符串对象
"hello" == new String("hello") //true
"hello" === new String("hello") //false
