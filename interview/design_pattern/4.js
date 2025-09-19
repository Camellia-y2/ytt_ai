// 单例模式
// 使用class静态属性实现

// class静态属性和方法是只属于该类的，不会被实例继承， 通过 类名.静态方法名 调用

class Singleton {
    static #instance;
    constructor(name){
        if(Singleton.#instance){ // 这里判断一次，是为了防止用户跳过getInstance直接new!!
            return Singleton.#instance;
        }
        this.name = name || 'singleton';
        Singleton.#instance = this;
        // this 指向当前正在被创建的对象实例
        // 把刚刚创建的这个实例（this），存到类的私有静态变量 #instance 中
    }
    static getInstance(name){
        if(!Singleton.#instance){
            Singleton.#instance = new Singleton(name);
        }
        return Singleton.#instance;
    }
}
const s3 = new Singleton('bob'); 
const s4 = new Singleton('alice'); 
console.log(s3.name, s4.name); // bob bob
console.log(s3 === s4) // true

const s1 = Singleton.getInstance();
const s2 = Singleton.getInstance();

console.log(s1 === s2); // true

