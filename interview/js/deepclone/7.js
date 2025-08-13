// 怎么用的  参数的默认值
// 默认值 用户会传的 Object.assign()收入囊中
// 目标对象是{} 空对象，合并默认参数和用户传参
// option是会传入的对象

function createUser(options = {}) {
    const defaultOptions = {
        name: '张三',
        age: 18,
        sex: '男'
    }
    const config = Object.assign({}, defaultOptions, options)
    console.log(config) // { name: '李四', age: 20, sex: '男' }
}

createUser({
    name: '李四',
    age: 20,
})
const baseConfig = {api:'/api', timeout: 500}
const envConfig = { timeout:1000, debug: true}
const finalConfig = Object.assign({}, baseConfig, envConfig)
console.log(finalConfig) //{ api: '/api', timeout: 1000, debug: true }


