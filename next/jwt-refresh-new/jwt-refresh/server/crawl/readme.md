# 爬取数据

- x-crawl

  x-crawl 是一个灵活且功能强大的 Node.js 多功能爬虫库，支持页面、接口和文件的抓取，并集成了 AI 辅助功能以智能应对反爬机制和优化爬取策略。

- 爬取的流程
1. http请求得到html
2. 正则 后端 在众多html文件中找到我们想要的
3. css querySelector
    内存中，将html字符串渲染为dom树
    x-crawl 支持在内存DOM树中使用querySelector语法来查找
4. AI 辅助
    用prompt去描述我们需要的内容，AI可以代替我们和内存DOM树沟通
    
