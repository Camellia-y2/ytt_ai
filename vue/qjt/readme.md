# VUE全家桶

## typeScript 
- vue-router RouterRecordRaw 帮助我们确保配置选项正确
    - 路由 path 和 component 是必填项
    - name 属性 选填
- alias
- 自动加载组件库的组件
    不用在任何地方使用的时候先引入了
    unplugin-vue-components/vite
    @vant/auto-import-resolver

## tailwindcss
- 原子css
- w-[calc(100vw-2rem)] 计算宽度
- 自适应

## vite
- alias
- 自动加载组件库的组件
    不用在任何地方使用的时候先引入了
    unplugin-vue-components/vite
    @vant/auto-import-resolver

## 项目架构

## VUE 语法
- SFC 单文件组件
- 模版语法
- 指令
- 事件
- 计算属性
- 响应式

## VUE 与 React 区别
MVVM 响应式（ref/reactive useState） 组件通信
             React      ->     Vue  
路由       RecatRouter      VueRouter
状态管理     Zustand          pinia

- react 单向绑定 绑定值 + 事件
- vue 双向 v-model 指令

## Store 状态管理
- Pinia
- store/
    - homeStore.ts 
    - userStore.ts
    - ...
- defineStore 定义状态管理
    - 第一个参数 状态管理的名称
    - 第二个参数 配置项
- 调用 useHomeStore() 函数返回一个状态管理实例
- toRefs 函数将状态管理实例中的状态转换为响应式的 ref 对象

## typescript
- vue-router RouterRecordRaw 帮助我们确保配置选项正确
    - 路由 path 和 component 是必填项
    - name 属性 选填

## ref
- 相当于react的useState，定义响应式状态
- 是一个响应式对象，要通过他的.value值进行读取值
   RefImpl {dep: Dep, __v_isRef: true, __v_isShallow: false, _rawValue: 1, _value: 1}

## slot 插槽
    提升组件的定制性  #action 是具名插槽
