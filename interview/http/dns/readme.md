# dns

- 全称 Domain Name System 域名系统
- 把好理解和记忆的域名解析成IP地址的*分布式数据库*
    浏览器在真正发起 HTTP（s）请求前，通常都会做一次 DNS 解析
- 一条命令
    ping www.baidu.com 递归查找的过程，结果是 IP

- dns 解析过程
    **url 输入到页面显示**的第一个表达
    - 补充 url 的完整性
    1. dns 浏览器缓存
        chrome://net-internals/#dns
        第一次访问的，需要解析，否则使用缓存的
    2. 操作系统 dns 缓存查看命令
        ipconfig /displaydns
    3. hosts 文件配置
        指定域名 解析IP 手动配置
        加一行记录 格式：**指定ip 域名 -> 127.0.0.1 bilibili.com**
        Hosts 文件的优先级高于网络 DNS 查询！ 只要配置了，就不会再去网上查。
        比如**我们会将项目本地 ip 配公司域名，那么开发效果就可以和线上域名效果一样。更安全。**
        在开发中经常使用。
    
    - 如果上面三者都没有，也就是没有命中缓存
        向 ISP（互联网服务提供商）指定的 DNS **递归解析器**发起请求。
        假设 www.baidu.com
        分布式数据库 key => value  key domain value ip
        dns 软件 13组根服务器的 ip 地址和域名
        写死的

        - 根域名服务器
            .com 的地址是多少
        - 域名服务器
            baidu.com 服务器在哪？
        - 权威服务器(这是谁家的，比如www.baidu.com 是 a.shifen.com 的)

            拿到IP地址 

        局域网 ——> 城域网（电信或移动服务商）

- 设备用ip地址区三次握手，建立tcp连接，使用http请求，网页打开了。

- dns优化
    - dns-prefetch dns预解析
    - <link type="dns-prefetch" href="//g.alicdn.com" />
    - 网络层的优化

- pre-connect 
    tcp 连接提前 通道打开 多路复用（提前做三次握手）
    <link data-n-head="ssr" rel="preconnect" href="//unpkg.byted-static.com/" crossorigin="anonymous">

- ping www.baidu.com
Ping www.a.shifen.com [183.2.172.177]
    a.shifen.com 是什么意思？
    域名 -> ip 不是绝对的（不都是一样的ip）
    域名背后，有一堆的服务器，是分布式的，多地的机房
    - 负载均衡
        挡在最前面
        容灾、高性能（如果某个服务器 down 了，还有其他的服务器可以用）
        算法，服务器
        当前哪些机器还有接待能力，随机算法
    - CDN 服务器
        Content Delivery NetWork
        内容分发网络
        部署静态资源的
        访问内容分成两部分
        1. 动态的，走中央数据库
        2. 静态的（css/js/jpg），走 CDN 服务器
