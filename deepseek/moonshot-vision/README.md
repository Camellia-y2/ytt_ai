# 智能前端之图片识别

- StrictModel react默认启动的严格模式
  执行一次，测试一次 两次
- 良好的编程风格
  移除不需要的代码
- import.meta.env.VITE_API_KEY 环境变量对象
  代码运行的时候可以喝环境变量交互
  把env写到代码里
- async await
  then
  异步
  流程控制
  await 比 then 更同步化 简单

- class是js的关键字
  - react JSX 运行，以原生JS运行
  - 用className来代替类名class

- 无障碍访问（盲人）
  - 标签
  - Label： htmlFor + input#id
    <label htmlFor='fileInput'>文件</label>
    <input 
    type="file" 
    className='input'
    accept='.jpeg,.jpg,.png,.gif'
    />


- 本地预览 preview
  - 良好且必须的用户体验，需要实时的告知用户在发生什么
  - 图片上传及处理挺慢的，所以需要proview
  - 实现步骤
    - onChange
      - e.target.files[0] 拿到图片对象
      - FileReader 实例
      - readAsDataURL 方法，读取图片
          - Data? 就是base64数据
          - base64 可以直接作为 img 的src

- 静态的html -> 动态模版 ({data}) -> 状态state useState