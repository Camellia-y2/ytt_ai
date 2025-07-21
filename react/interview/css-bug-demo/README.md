# css 模块化
- Button AnotherButton 按钮组件
    自己写的组件
    别人写的组件
    第三方的组件
    冲突 层叠样式覆盖（类名一样）
- 唯一的类名
    取唯一的类名 烦了
    css 模块化的能力
    不会影响外界
    不受外界影响
- style.module.css 模块化css
    - react vite 
        确保唯一hash 值 加到原类名上
    - vue scoped
    - 类名是唯一的 可读性会受影响吗？
        - 不会
        - 读的是源码 .button
        - 这个样式被模块化保护起来了
        - npm run bulid 打包的时候 会被编译成唯一的hash 值
- dev/bulid/test/product
    开发的时候在 dev 代码的可读性
    vite,react .jsx babel preset-react
    style.module.css
    import styles from './style.module.css'
    styles js 对象 css 的每一个类名都可以面向对象
    访问绑定

    npm run build 打包，要上线
    npm run test 测试一下（上线前）
    aliyun ngnix 跑起来 dist/