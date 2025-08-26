# 数据可视化

- echarts
    老板、客户，数据报表
    开源的用于绘制柱状图、饼状图等的可视化库
- @types/echarts
    echarts 类型声明文件，是单独的
    为什么react不需要单独安装声明文件？
    react是用ts写出来的
    echarts原生js和类型声明文件是分开的

- 直观看出数据价值
    echarts 2D
    three.js 3D
    数据可视化

- echarts 流程
    - 安装echarts，@types/echarts
    - init 实例化
        要给他一个图表的DOM 挂载点
        useRef<HTMLDivElement>(null)
        null | HTMLDivElement 联合类型 useRef 可变对象
    - setOption(option) 设置图表配置项
        echarts.init(dom).setOption(option)
        series