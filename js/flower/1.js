// 声明了一个对象常量
// 内存中开辟一个空间
// hxt 取址 & 变量名是地址的标记
// js是弱类型语言 变量的类型是由值决定的
// = 赋值 Object
// 对象字面量(字面意义上) JSON
// JS 太灵活，不需要new， 通过{}拿到对象 [] 拿到数组
const hxt = {
    name: '黄新天',
    age: 20,
    tall: 187,
    hometown: '山东临析',
    isSingle: true
};
// js 灵活
const pyc={
    name:'彭奕淳',
    age:20,
    tall: 180,
    hometown:'新余',
    isSingle: true, // Boolean 布尔类型
    // 形参
    // 送花
    sendFlower: function (girl) { // 方法
        console.log(pyc.name+'送花给'+girl.name);
    }
};

// 数组
const xm={
    xq:90,
    name:'小美',
    age: 20,
    receiveFlower: function(sender){
        console.log(xm.name+'收到了'+sender.name+'送的花');
        if(xm.xq>90){
            console.log('硕果走一波');
        }else{
            console.log('滚...');
        }
    }
};

const xh={
    name:'小红',
    room:'408',
    hometown:'新余', //老乡
    // 送小美，宋晓红，都具有receiveFlower方法
    // 对象互换
    // 接口 interface
    receiveFlower: function(sender){
        // if(sender.name==='彭奕淳'){
        //     console.log('彭奕淳,在一起');
        //     return; // 终止方法
        // }
        setTimeout(function(){ // 异步
            xm.xq=99;
            xm.receiveFlower(sender);
        },3000);
    //    xm.receiveFlower(sender);
    }
}
pyc.sendFlower(xm); // 调用方法 传参 实参
// console.log(xm.age);
// xm.receiveFlower(pyc); // 调用方法 传参 实参
xh.receiveFlower(pyc); // 调用方法 传参 实参