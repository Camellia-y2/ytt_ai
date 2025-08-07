# 封装的JSONP

- 缺点
    - 只能解决GET请求的跨域问题
        http://localhost:3000/say?callback=biaobaiCallback&wd=ilikeyou
    - 需要后端配合
        后端的输出的方式要加padding
    - 不太安全
        全局挂载了一个callback函数（show），容易被黑客攻击
