const bigNum = 123456789012345678901234567890123456789n;
console.log(bigNum);
const theNum1= BigInt(123456789012345678901234567890123456789);//不准确
const theNum2= BigInt("123456789012345678901234567890123456789");
// BigInt属于内置函数，并非构造器，所以不能用new关键字来调用它
//const theNum3= new BigInt("1234567890123456789012345678901234567890");//BigInt is not a constructor
console.log(theNum1,theNum2);
console.log(typeof bigNum,typeof 1,typeof 1n);
console.log(bigNum + 1n);//相同类型才可以相加

// BigInt属于内置函数，并非构造器，所以不能用new关键字来调用它
// BigInt 声明方式：函数声明
// bigint 简单数据类型 不是对象 不是构造函数
//const theNum3= new BigInt("1234567890123456789012345678901234567890");//BigInt is not a constructor
//console.log(theNum3);