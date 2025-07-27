import React from 'react'

// UserProfile 组件：用于展示当前用户信息
const UserProfile = () => {
  return (
    <div style={{ padding: '12px', borderBottom: '1px solid #eee', display: 'flex', alignItems: 'center' }}>
      {/* 用户头像 */}
      <img
        src="https://cdn.jsdelivr.net/gh/realzhangm/oss@main/avatar/default-user.png"
        alt="用户头像"
        style={{ width: 40, height: 40, borderRadius: '50%', marginRight: 12 }}
      />
      {/* 用户昵称和ID */}
      <div>
        <div style={{ fontWeight: 'bold' }}>访客昵称</div>
        <div style={{ fontSize: 12, color: '#888' }}>ID: 123456</div>
      </div>
    </div>
  )
}

export default UserProfile 