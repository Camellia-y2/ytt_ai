// 监听来自popup的消息
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    // 检查消息类型
    if (request.action === 'changeBackgroundColor') {
        // 改变页面背景颜色
        document.body.style.backgroundColor = request.color;
    }
}); 