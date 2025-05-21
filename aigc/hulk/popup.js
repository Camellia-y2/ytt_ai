document.addEventListener('DOMContentLoaded', function() {
    // 获取按钮元素
    const changeColorButton = document.getElementById('changeColorButton');
    
    // 添加点击事件监听器
    changeColorButton.addEventListener('click', function() {
        // 获取当前活动标签页
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            // 向内容脚本发送消息
            chrome.tabs.sendMessage(tabs[0].id, {
                action: 'changeBackgroundColor',
                color: 'green'
            });
        });
    });
}); 