import axios from 'axios'; // http请求库
// http请求的时候，所有接口地址的公共部分
const BASE_URL = "https://api.github.com"; // 基础地址
// 标准http请求库
// axios method url
// promise 现代化
// api 模块 出去则应用之外，后端 搞外交
export const getRepos = (username) => { // 获取用户的仓库信息
    return axios.get(`${BASE_URL}/users/${username}/repos`); // 返回一个promise对象
}
export const getRepoDetail = (username,repoName) => { // 获取用户的仓库信息
    return axios.get(`${BASE_URL}/repos/${username}/${repoName}`); // 返回一个promise对象
}
