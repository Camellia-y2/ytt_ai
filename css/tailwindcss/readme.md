# tailwindcss 原子css

- 非常好用
- 几乎不用写css
- AI 生成代码 css 用的都是tailwindcss
- 配置流程
  - 安装tailwindcss  npm install tailwindcss @tailwindcss/vite
  - 配置tailwindcss  vite.config.js
  - 引入tailwindcss  @import "tailwindcss";
- 有各种内置的css类名 分门别类
- 1rem = 4个单位

- 文字行数限制
  -webkit-line-clamp: 2; 不能独自生效
  -webkit 浏览器内核 Chrome + safari
  -mozilla 火狐浏览器内核代号
  试验阶段的属性 新的
  -webkit-line-clamp: 2;
  diaplay:-webkit-box
  -webkit-box-orient: vertical
  overflow: hidden;
