# phoneGPT

- chatbot
  组件、tailwindcss  messages
  ai streaming 复杂 封装？
  大模型
- 专业领域的chatbot
  RAG 手机知识库 检索增强生成
  - 知识库（爬虫）
  - 向量数据库 supabase 

## 项目中用到的技术

- RAG 检索增强生成
  - embedding openai embed  向量化
  - 相似度 cos  -> 1 倒序
  - 存到supabase数据库 
### package.json
- ai sdk
  build AI-powered applications
  封装了LLM的调用
  @ai-sdk/openai  调用LLM 
  @ai-sdk/react hooks api 式一行完成流式输出

- supabase
  BASS Backend as Service
  Postgres 支持 向量数据库

- langchain
   LangChain 是一个用于构建 AI 应用的框架，它连接大模型、数据源和工具，简化了从提示工程到链式调用、记忆管理和代理决策的开发流程。
   @langchain/community 社区提供的工具（爬虫）
   @langchain/core 核心模块

- dotenv
- puppeteer 无头浏览器
  Puppeteer 是一个 Node.js 库，用于控制无头浏览器（如 Chrome），可自动化网页操作，如截图、爬取数据、测试交互等。
- lucide-react  是一个轻量、开源的 React 图标库
- react-markdown 是一个 recat 组件，用于渲染 Markdown 文本

## Next.js
- layout metadata
    SEO

## tailwindcss
- max-w-3xl 最大屏幕宽度为 3xl -> 48rem -> 768px
  响应式的技巧
  48rem（适配多机） 768px ipad竖着拿的尺寸
  适配移动设备（phone, pad）  width = 100% = 100vw
  PC端  768px, mx-auto 居中
  Mobile First 移动设备优先
- 在 Tailwind CSS 中，[] 表示任意值（Arbitrary Value），允许你直接写入自定义的 CSS 值（如 80vh），
  会被转换为对应的内联样式，实现灵活布局。

- "use client"; 是 Next.js 中的指令，用于标记一个组件为客户端组件，使其可以使用 React 的交互功能（如 useState、useEffect）和客户端特有的逻辑。

- @ai-sdk/react
  hooks 封装chatLLM的功能，方便流式输出。

## typeScript
- 组件props类型定义

## 前端部分的亮点
- @ai-sdk/react 对chabot 响应式业务的封装，一行代码完成流式输出
  useChat hook 封装了chatLLM的功能，方便流式输出。
- react-markdowen 组件，用于渲染 Markdown 文本。ai响应中 markdown 是主要的格式。
  # - ![]() 解析
- tailwindcss 适配
- react组件划分和ts 的类型约束
  shadcn 按需加载、定制性强
- lucide-react 图标库
- useChat 对hooks的理解 响应式业务的封装，一般函数封装的区别

- AI SDK 流式输出
  import { streamText } from 'ai';
  AI SDK 中用于生成流式文本响应的核心函数，支持逐字输出、工具调用和异步处理
- propmt 模版设计
  - 准确 复用 
  - 格式
    - 身份
    - 任务
    - 区分 context 和 question
  - 返回格式
  - 约束 不回答手机之外的
  - 接收一个参数，函数返回
  

## 后端亮点
- ai streamText 流式输出
- result.toDataStreamResponse() 将 streamText 生成的流式结果转换为一个可被前端消费的 Response 对象，支持以数据流形式传输 AI 输出，实现逐字显示等实时效果。
- 爬虫脚本
  - seed 脚本任务
    npm run seed
    负责填充知识库
  - seed.ts 编写这个脚本
    .ts 文件不可以直接运行
    ts-node + typescript 可以直接运行
    先解析成js，再运行
    - ts-node 是一个为 Node.js 设计的 TypeScript 执行引擎。它允许你直接运行 .ts（TypeScript）文件，而无需事先将它们编译成 JavaScript。
- langchain Agent 开发框架
  coze  promptTemplate  记忆MessageMemory Community
- vercel 的 AI 版图
  - next.js
  - ai-sdk
  - js 的云端运行环境
  - v0 bolt
  - 用户搜索的数据从哪里来？爬虫
    - ai-sdk/react StreamText流式输出 -> prompt
    - 网页（wikipidia）-> langchain/community + puppeteer（爬取） -> 
      langchain提供的分块机制（chunks 段落）-> embedding -> supabase 存储

- 向量存储
CREATE TABLE public.chunks (
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    content text null,
    vector extensions.vector null,
    url text null,
    date_updated timestamp without time zone DEFAULT now(),
    CONSTRAINT chunks_pkey PRIMARY KEY (id)
  );

## 遇到的问题
- ai-sdk 检索的时候， LLM 给了老版本的代码，调试出了问题，mcp解决问题
- ts-node 编译时不支持ESM
  tsconfig.json ts 配置文件
  支持ts-node commonjs

- rpc 调用
  在supabase数据库中调用函数

  -- 启用 pgvector 扩展
  CREATE EXTENSION IF NOT EXISTS vector;

  create or replace function get_relevant_chunks(
    -- 一个长度为 1536 的“向量” 
    -- query_vector 表示“用户问题的向量”（即把问题通过 AI 模型转成的数字数组）
    -- vector(1536) 表示 1536 维的向量
    query_vector vector(1536),
    -- 只找 “相似度” 超过这个值的结果
    match_threshold float,
    -- 最多返回多少条结果
    match_count int
  )
  -- 以表格的形式返回结果
  returns table (
    -- 文本块的唯一标识
    id uuid,
    -- 实际内容（比如一段文字）
    content text,
    -- 内容来源的网址
    url text,
    -- 最后更新时间
    date_updated timestamp,
    -- 和查询向量的相似度分数（0～1，越接近 1 越相似）
    similarity float
  )

-- 说明这个函数是用 SQL 语言写的，并且是“稳定的” 
-- stable 表示这个函数在一次查询中总是返回相同结果（不修改数据、不依赖随机值）,类似纯函数
  language sql stable

-- 函数内容开始。
-- as $$ ... $$ 是 PostgreSQL 中定义字符串的一种方式（叫“美元符号引用”），用来包裹函数体，避免引号冲突
  as $$
    select
      id,
      content,
      url,
      date_updated,
      -- chunks.vector <=> query_vector 是 pgvector 扩展提供的“距离”计算
      1 - (chunks.vector <=> query_vector) as similarity
    from chunks
    where 1 - (chunks.vector <=> query_vector) > match_threshold
    -- 倒序排序 按 similarity（相似度）从高到低排序，确保最相关的结果排在前面。
    order by similarity desc 
    -- 限制返回结果的数量，最多返回 match_count 条
    limit match_count;
    -- 函数内容结束。
  $$;

- 向量相似度计算
  - mysql 不支持， postgresql 支持，
    <=> 距离计算
  - 1 - >
  - 数据库支持函数
    传参
    指定返回的内容（表格形式）
    构建sql语句进行查询