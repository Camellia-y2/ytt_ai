import React from 'react'

// FAQQuickReply 组件：常见问题快捷回复
const FAQQuickReply = () => {
  // 示例常见问题
  const faqs = [
    '如何修改密码？',
    '如何联系客服？',
    '订单如何退款？',
  ]
  return (
    <div style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}>
      <div style={{ fontSize: 14, color: '#666', marginBottom: 4 }}>常见问题：</div>
      <div style={{ display: 'flex', gap: 8 }}>
        {faqs.map((q, idx) => (
          <button key={idx} style={{ fontSize: 12, padding: '4px 10px', borderRadius: 6, border: '1px solid #ddd', background: '#fff', cursor: 'pointer' }}>{q}</button>
        ))}
      </div>
    </div>
  )
}

export default FAQQuickReply 