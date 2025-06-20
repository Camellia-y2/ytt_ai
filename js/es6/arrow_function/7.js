const obj = {
    name: "Eve",
    greet: () => {
        console.log(`Hello, ${this.name}`);
        console.log(this);
    }
};

obj.greet(); // 输出 "Hello, undefined"（因为 this 来自外层，通常是全局对象或 undefined）