const Singleton = (
    () => {
        let instance;
        return () => instance || (instance = {
            name: 'my singleton',
            time: Date.now(),
        })
    }
)()

const obj1 = Singleton()
const obj2 = Singleton()
console.log(obj1.name, obj2.name);
console.log(obj1 === obj2) // true  指向的是同一个对象引用