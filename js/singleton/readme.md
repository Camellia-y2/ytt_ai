# 单例模式
单例模式（Singleton Pattern）：是一种创建型**设计模式**，它确保一个类只有一个实例，并提供一个全局访问点来访问这个实例。

## 实现Storage，使得该对象为单例，基于localStorage进行封装。实现方法 setItem(key,value) 和 getItem(key)。

- 分析题目
    - 实现 Storage 类
    - 设计模式：单例模式
    - 封装：getItem 和 setItem 方法

## 单例模式
单例是一种设计模式（static getInstance），高级程序的交流语言。
一个类只能实例化一次。
- 通过static属性 instance 持有唯一的一次实例
- static getInstance 方法 判断 instance 并返回
    - 实例的时候一定要这样
- 优点：
    - 性能特别好，只有一个实例，好管理
    - 避免了重复实例化，节省资源

## 为什么用单例模式来做本地存储？
- 因为localStorage是全局的，所以可以用单例模式来做本地存储。
- 这样可以避免重复实例化，节省资源。
- 无论实例化多少个，本质是调用localStorage,都是同一个，避免浪费资源，所以要用单例模式来做本地存储。