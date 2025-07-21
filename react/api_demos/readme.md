# 全栈开发
## 表演型项目
- 前端 react
- mockjs 前端伪接口
   /api axios

- 后端 java/node/go

## vite-plugin-mock
   - mock
   前端在后端给出真实接口前，需要mock一下，前端自己造接口
   - pnpm i vite-plugin-mock 安装插件
   - mock 服务启动
   - /mock/test.js 根目录  src下是前端代码 前后端分离要分开
    export default [
    {
        url: '/api/todos',
        method: 'get',
        response: () => {
            const todos = [...];
            return {
                code: 0,
                data: todos,
            }
        }
    }
]

- 前后端联调
    - 开会立项
    /api/todos
    [
        {
            id: '',
            name: 'xx',
            done: true|false,
        }
    ]
