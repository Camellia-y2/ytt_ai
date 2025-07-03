# 智能前端之单词学习
- 产品和商业模式
    - 学单词
    - 拍照记单词
       - 图片交给多模态模型，给个 word
       - deepseek  aigc 例句
       - 火山引擎tts 拿到发音
- focus 
    - 拍照背单词，用单词
- 解决一些特定的效率性、创新型App

- npm init vite
   - vite 是工程化脚手架，构建工具
- npm i 慢了点
   - react ... 项目依赖
   - pnpm 代替 npm
   - 不同的项目 重复去安装了react
   - react 等包放到一个地方，如果之前安装过，链接过，只需要安装一次

## react 语法
- 单向数据流
    - 数据状态流动
    - 父组件负责提供数据，和api接口请求
    - 拆成多个子组件
    - 数据会从父组件传递给子组件
    - 子组件专注于显示，负责消费数据
    - 通过props传递数据
        - <PictureCard 
                uploadImage={uploadImage}
           />
           像函数参数一样，可以解构

## 项目中一定要安排的技能点
- pnpm 
- react 思想
    - 数据状态 useState
    - 数据驱动
    - 响应式 数据状态变化，视图会自动更新
        - 不用频繁操作DOM，只需要关注业务
- 业务
    - 图片上传
        - 图片预览
- 组件化设计
    - App
        - 提供数据
        - 图片上传大模型
    - PictureCard
        单向数据流 
        - 子组件只负责消费数据
        - 父组件负责提供数据，数据的请求
        - 先要给父组件
- 性能优化
    - liner-gradient 代替图片做背景
- 用户体验
    - 上传图片的功能，预览功能
    - 无障碍访问 label for + input#id 
        - label 标签，for属性，指向input的id
- es6新特性
    - 可选链操作符
- html5 功能
    - file 文件对象
- 智能
    - 多模态模型
        - 月之暗面 将图片的base64编码，传给多模态模型，返回一个单词
        - prompt?
    - prompt 介绍设计原则
        - 给它一个明确的身份 LLM交流 当个人
        - 清晰且具体的任务
        - 限制，指定结果
            - 如 指定返回的结构 JSON
            - 有利于接下来的业务执行
            - 拿着大模型的回答，接着干活
            - JSON是最好的接口格式
        - 分步做

        
{
  "image_description": "A simple black and white image of a handprint.",
  "representative_word": "handprint",
  "examples_sentence": "The artist used a handprint to create a unique piece of art.",
  "explaination": "Look at the image. It shows a handprint.\nA handprint is an outline or impression of a hand.\nIt is often used in art or to leave a mark.\nChildren might make handprints in paint at school.\nHow do you think handprints are used in art?",
  "explaination_replys": ["Handprints can be used to create patterns or designs.", "They can also be a way for children to express themselves creatively."]
}
