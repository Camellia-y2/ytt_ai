# mcp

- function call 
    可以让大模型LLM已突破自身知识能力的局限，通过调用外部工具或API来获取实时信息、执行计算或操作，从而获取最新数据精确计算与外部系统交互的复杂任务。
- mcp Model Context Protocol
    是一个协议，web开发中的Restful协议，如何讲外部资源暴露给LLM的协议和编程风格。
    是 Function Call 的升级版

    在做各种 Function Call 有点乱的时候，mcp 统一了一切

    mcp 是 LLM 与外界之间的通信协议，他就好像USB接口, LLM训练完了后的不了解的知识。

    LLM本身不知道则呢么调用地图、数据库、搜索引擎，MCP规定了标准上下文交换方式，让模型能像调用API一样去访问外部能力

## 举例
    高德地图MCP，请帮我规划从公司到机场的路线
    模型根据高德地图MCP插件，获取实时路径和交通数据

## 意义
- LLM 输出更可靠
- 降低集成成本（自有系统和LLM集成）
- 数据安全可控
高德地图接入MCP，就像LLM的眼睛和耳朵，让AI真正理解和使用实时世界。

- 安装mcp 客户端 cline
- 高德地图apikey

## mcp 的使用
- mcp server 是基于mcp协议的服务器软件
    定义tool..
- LLM
- mcp client cline/cursor
    配置 mcp server
- LLM -> client -> server Transport 通信
    - 例子：帮我订南昌到杭州的机票？
        LLM解决不了，它会问client，client会调用mcp server，server会调用高德地图api，api返回数据，server返回数据，client返回数据，LLM返回数据。
