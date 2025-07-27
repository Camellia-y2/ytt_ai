import React from 'react'

// AgentStatus 组件：客服在线/离线状态
const AgentStatus = () => {
  // 示例状态
  const online = true
  return (
    <div style={{ padding: '8px 16px', color: online ? '#52c41a' : '#888', fontWeight: 500 }}>
      客服状态：{online ? '在线' : '离线'}
    </div>
  )
}

export default AgentStatus 