showName(); // 驼峰式命名
console.log(myName); // undefined
console.log(a); //error
let a=1;
var myName = '曾欣';
console.log(myName);// '曾欣'
function showName() {
  let b = 2;
  console.log(myName); // undefined
  console.log('函数执行了');
}