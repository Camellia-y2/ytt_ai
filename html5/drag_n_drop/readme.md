# html5 drag_n_drop

- html5 考点
    新的交互相关 
- ipad 为何成功？
    用户体验 拖拽体验 很傻瓜 好理解
    google 拖拽式上传
- 媒体查询 Media Query
    - PC first 的设计
      Mobile First 移动优先 80% 体验
    - 查询相关的媒体（设备） 做适配
      使用@media(条件 < 600 移动端   < 1024 ipad   pc > 1200  lg大尺寸 1600+)
    - 多设备适配 移动时代
- drag and drop 细节
    - 有些元素有默认的drag特性
    比如图片就可以拖拽到别的Tab显示
    dragStart 拖拽开始 e.preventDefault()
    dragEnd 拖拽结束
    dragOver 拖拽悬浮 e.preventDefault()
    dragEnter 拖拽进入目标元素 e.preventDefault() 写一些样式反馈
    dragLeave 拖拽离开目标元素
    drop 拖拽落到目标元素上 e.preventDefault() 做删除、拖拽上传
    - 元素添加dragable = true html5 drag功能
    - 模拟现实中的用户体验 元素，容器可以drop的
    
