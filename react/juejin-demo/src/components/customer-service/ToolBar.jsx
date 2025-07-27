import React from 'react'

// ToolBar 组件：发送图片、文件等工具栏
const ToolBar = () => {
  return (
    <div style={{ padding: '8px 0', display: 'flex', gap: 12, borderBottom: '1px solid #eee', background: '#fafafa' }}>
      <button style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#007fff' }}>图片</button>
      <button style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#007fff' }}>文件</button>
      {/* 可扩展更多工具按钮 */}
    </div>
  )
}

export default ToolBar 