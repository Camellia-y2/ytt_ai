import React from 'react'

// ChatBox 组件：用于展示客服与用户的聊天内容
const ChatBox = () => {
  return (
    <div style={{ flex: 1, padding: '16px', overflowY: 'auto', background: '#f9f9f9', borderRadius: 8 }}>
      {/* 聊天内容区域，后续可替换为动态消息列表 */}
      <div style={{ color: '#888', textAlign: 'center', marginTop: 40 }}>
        暂无聊天内容
      </div>
    </div>
  )
}

export default ChatBox 