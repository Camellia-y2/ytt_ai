const str = "我的手机号是13512345678，有空打给我"
const str2 = "我的手机号是不告诉你，有空打给我"
const reg = /1[3-9]\d{9}/g;

console.log(reg.test(str));
console.log(reg.test(str2));
console.log(str.match(reg));

const str3 = "我的{name}";
// 替换
str3.replace(/\{name\}/, "奶龙");