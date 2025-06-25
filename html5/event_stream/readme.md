# 流式输出

- 25年大厂必考题
- 为什么会考这道题？
    - LLM 聊天机器人（23年AI爆款 =》24年推理 =》25年AI Agent年） AI 产品
    - 流式输出 属于用户体验 是前端职责

- 为何需要流式输出？
    - 边生成边输出？
        - 后端、LLM 以 API 方式提供给我们？
        - AIGeneraticContent 生成式的大模型 一个 token 一个 token transform（算法 来自Google） 出来的
        - "我是你的assistant,..."  基于token开销付费的
        - 更快的看到响应
    
- 给用户前端的职责
    - 良好的用户体验
    - 尽快返回结果
    - 障眼法 生成需要花时间哦， 我愿意等
    - 最懂用户心理的

- 步骤
    - 前端能实现流式输出？
        - setInterval  (不推荐)
        - 异步 
        - 事件机制 message 
        - 事件驱动  （推荐）
            
    - 后端又怎么实现？
        - socket 长链接
        - http 请求是基于请求响应式简单协议 关闭链接？
        - http 2.0 支持 server push 服务器推送

## 全栈能力
- npm init -y  初始化项目 -> 变为 node 后端项目
- npm i express  安装express  老牌的 node 框架


- sse和server push的原理
- 后端网络理解