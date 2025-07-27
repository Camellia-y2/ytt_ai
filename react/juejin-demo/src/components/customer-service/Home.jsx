import React from 'react'
import SessionList from './SessionList'
import UserProfile from './UserProfile'
import AgentStatus from './AgentStatus'
import FAQQuickReply from './FAQQuickReply'
import ToolBar from './ToolBar'
import ChatBox from './ChatBox'
import MessageInput from './MessageInput'

// Home 组件：客服主界面，组合所有子组件
const Home = () => {
  return (
    <div style={{ display: 'flex', height: '600px', border: '1px solid #eee', borderRadius: 10, background: '#fff', boxShadow: '0 2px 8px #f0f1f2' }}>
      {/* 左侧会话列表 */}
      <SessionList />
      {/* 右侧主区域 */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <UserProfile />
        <AgentStatus />
        <FAQQuickReply />
        <ToolBar />
        <ChatBox />
        <MessageInput />
      </div>
    </div>
  )
}

export default Home 