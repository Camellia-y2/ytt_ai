# 秋招面试

## JS

- Object.assign(target, source)
- 把多个源对象（source1, source2, ...）的所有属性拷贝（复制）到目标对象（target）中，并返回修改后的新的目标对象，不会生成新对象。

- 深浅拷贝
- “=” JS内存相关 简单赋值（栈） 引用式赋值（堆）
- 拷贝（简单数据类型 复印了一份，互不干扰） 和 引用式赋值（两个变量指向同一个内存地址，改变一个，另一个也会改变）

- 响应式底层
    - Object.defineProperty()
    - Proxy

## Git
   开发中如何使用git的？
   - 配置全局用户名和邮箱（新电脑）
    - git config --global user.name "yourname"
    - git config --global user.email "youremail@example.com"
   - 入职 git clone 公司代码
    - 主分支 main/master
    - 新开一个分支 
        - git branch 创建分支名
        - git checkout 切换分支
        - git check -b xxx 新建并切换到xxx分支
    - 常用命令
        - git pull origin main 拉取分支代码(每天上班前的动作)
        - git status 当前状态



