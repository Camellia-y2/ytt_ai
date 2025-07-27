import React from 'react'

// SessionList 组件：展示会话列表
const SessionList = () => {
  // 示例会话数据
  const sessions = [
    { id: 1, name: '用户A', lastMsg: '你好', unread: 2 },
    { id: 2, name: '用户B', lastMsg: '请问...', unread: 0 },
  ]
  return (
    <div style={{ width: 220, borderRight: '1px solid #eee', background: '#fff', height: '100%', overflowY: 'auto' }}>
      <div style={{ fontWeight: 'bold', padding: '12px 16px', borderBottom: '1px solid #eee' }}>会话列表</div>
      {sessions.map(s => (
        <div key={s.id} style={{ padding: '10px 16px', borderBottom: '1px solid #f5f5f5', background: s.unread ? '#f0f8ff' : '#fff', cursor: 'pointer' }}>
          <div style={{ fontWeight: 500 }}>{s.name}</div>
          <div style={{ fontSize: 12, color: '#888' }}>{s.lastMsg}</div>
          {s.unread > 0 && <span style={{ color: '#fff', background: '#ff4d4f', borderRadius: 8, fontSize: 10, padding: '2px 6px', marginLeft: 8 }}>{s.unread}</span>}
        </div>
      ))}
    </div>
  )
}

export default SessionList 