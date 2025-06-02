// 独一无二的值
const sym=Symbol();
const sym1=Symbol();
const sym2=Symbol('desc'); // label 标签
console.log(typeof sym,sym);
console.log(sym===sym1);//false
// symbol 可以用于对象key
// 使用Symbol 构造函数实例化，一个标记为id 的唯一值ID
// ID 唯一性，Symbol
const ID = Symbol('id');
// es6之前，key 是字符串，es6 之后，key 可以是Symbol
// const sex = 'sex';
const age = Symbol('age');
const user = {
    "name": 'zs',
    "age":2,
    [age]: 18,
    // key是独一无二的
    // 当我们在大厂，如果我们要去修改别人的代码中的对象
    // 对象是动态的 不希望出错
    [ID]: 123
    // [sex]: '男'
}
console.log(user.name,user[ID]);
console.log(user.age,user[age]);//2 18
console.log("------------");

// 不想遍历到Symbol  
// 实现私有，对象隐私，内部需要，不希望外部调用
for(let key in user){ // 对象遍历
    console.log(key,user[key]);//name zs age 2
}
// 如何遍历到Symbol
console.log(Object.getOwnPropertySymbols(user));//[ Symbol(age), Symbol(id) ]