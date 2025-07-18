import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';// vite 工程化工具 node 环境下的工具

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { // 路径别名
      // 路径别名，@ 表示 ./src 目录
      // 这样在其他文件中就可以使用 @/xxx 来引用 ./src 目录下的文件
      '@': path.resolve(__dirname, './src'),
    },
  },
})
