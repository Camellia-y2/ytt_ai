// console.log("智能前端，智能后端，笑傲秋招")
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', async function(event) {
    event.preventDefault(); // 阻止表单的默认提交行为
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    console.log(username,password);
    
    try {
        const response = await fetch('/login', {
            method: 'POST', // 请求方法为POST
            headers: { // 请求头，指定请求的内容类型为application/json
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password }) // 请求体，将用户名和密码转换为JSON字符串,只能发送字符串，要序列化         
        })
        const data = await response.json(); // 解析响应体为JSON对象
        console.log(data);
    }catch (error) {
        console.error('登录失败');
    }
})

document.addEventListener('DOMContentLoaded',async () => { // 页面加载完成后执行
    // 登录了吗
    try {
        const response = await fetch('/check-login');
        const data = await response.json(); // 解析响应体为JSON对象
        console.log(data);
        if (data.loggedIn) {
            document.getElementById('loginSection').style.display = 'none';
            document.getElementById('welcomeSection').style.display = 'block';
            document.getElementById('userDisplay').textContent = data.username;
          } else {
            document.getElementById('loginSection').style.display = 'block';
            document.getElementById('welcomeSection').style.display = 'none';
          }
    } catch (error) {
        console.error('获取用户信息失败');
    }
})
   