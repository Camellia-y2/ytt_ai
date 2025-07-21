// axios标准的Http请求库，vue/react都用它
import axios from "axios";
// mock 地址
axios.defaults.baseURL = "http://localhost:5173"; // 公共请求路径
// 通常本地开发使用 http ，且端口可能需要检查。

// 真正的线上地址有了
// 前端需要的是 url + JSON 数据
// axios.defaults.baseURL = 'https://api.github.com/users/shunwuyu'

export default axios;