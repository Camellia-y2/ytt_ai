- JSX？
    - JSX 不能独立运行
    - 依托于 vite工程化
        jsx -> React.createElement() 
    - React 环境中

- babel
    **Make JavaScript Great Again!**
    **大胆使用JS最新语法，不用等待**
    es6 promise -> es8 async await

    let -> var
    () => {} -> function(){}
    class -> function
    ...
    编译成浏览器可以识别的JS代码

- 编译过程：
    - pnpm i @babel/cli @babel/core -D
        @babel/cli babel的命令行工具
        @babel/core babel的核心工程
        babel 负责JS转码
        -D 开发阶段的依赖 devDependencies
        上线后是不用的
    - ./node_modules/.bin/babel 
        转换的规则
        react -> IOS 代码
        es6+ -> es5
        JSX -> React.createElement()
    1. 解析：将代码解析成AST（抽象语法树）
    2. 转换：将AST转换为新的AST
    3. 生成：将新的AST生成新的代码