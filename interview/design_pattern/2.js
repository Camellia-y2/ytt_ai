// IIFE 创建闭包的手段
// IIFE + 闭包 实现单例模式

const Singleton = (function(){
    // IIFE私有作用域的私有变量，通过闭包来保存进行访问
    let instance;
    // 创建实例的“身体”，只会执行一次（单例）
    function createInstance() {
        return {
            name: 'MySigleton',
            timestamp: new Date(),
        }
    }
    // Singleton返回一个包含创建实例方法的对象，getInstance()是这个对象暴露给外界的方法
    return {
        getInstance(){
            if(!instance){
                instance = createInstance();
            }
            return instance;
        }
    }
})()

const obj1 = Singleton.getInstance()
const obj2 = Singleton.getInstance()
console.log(obj1.name, obj2.name);
console.log(obj1 === obj2) // true  指向的是同一个对象引用