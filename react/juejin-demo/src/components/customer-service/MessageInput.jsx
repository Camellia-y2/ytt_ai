import React, { useState } from 'react'

// MessageInput 组件：消息输入框
const MessageInput = () => {
  const [value, setValue] = useState('')
  // 发送消息事件（后续可扩展）
  const handleSend = () => {
    if (!value.trim()) return
    // 这里可以添加发送消息逻辑
    setValue('')
  }
  return (
    <div style={{ display: 'flex', alignItems: 'center', padding: '8px', borderTop: '1px solid #eee', background: '#fafafa' }}>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="请输入消息..."
        style={{ flex: 1, padding: '8px', borderRadius: 6, border: '1px solid #ddd', marginRight: 8 }}
      />
      <button onClick={handleSend} style={{ padding: '8px 16px', borderRadius: 6, background: '#007fff', color: '#fff', border: 'none', cursor: 'pointer' }}>发送</button>
    </div>
  )
}

export default MessageInput 