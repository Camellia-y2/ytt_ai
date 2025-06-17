    localStorage.setItem('username', 'JohnDoe');
    localStorage.setItem('userAge', 30); // 数字会被自动转换为字符串 "30"

    const username = localStorage.getItem('username');
    console.log(username); 
    
    localStorage.removeItem('username');
    
    localStorage.clear();

    // - 使用 JSON.stringify(value) 方法，它会将 JavaScript 对象或数组转换为 JSON 格式的字符串。
        // 定义一个对象
            const user = {
            name: "Alice",
            age: 25,
            hobbies: ["reading", "coding"]
            };

            // 转换为字符串并存入 localStorage
            localStorage.setItem("userData", JSON.stringify(user));
            // 实际存储的内容是字符串：'{"name":"Alice","age":25,"hobbies":["reading","coding"]}'

    // - 使用 JSON.parse(text) 方法，它会将 JSON 格式的字符串解析为 JavaScript 对象或数组。
        // 从 localStorage 读取字符串
            const userString = localStorage.getItem("userData");

            // 转换回对象
            const userObject = JSON.parse(userString);
            console.log(userObject.name); // 输出: "Alice"
            console.log(userObject.hobbies[0]); // 输出: "reading"

    // -  localStorage 只能存储字符串。如果直接存储对象，会自动调用 toString() 方法，导致数据丢失（例如 [object Object]）。
    //     必须使用 JSON.stringify() 和 JSON.parse() 进行转换。