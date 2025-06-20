// 业务流水账代码
// 封装
function Button(id){
    this.element = document.querySelector(`#${id}`);
    this.bindEvent();
}

// Button.prototype.bindEvent = function(){
//     // 原因： this 丢失 =》解决：1.使用箭头函数直接沿用上一层的this 2.改变this指向
//     console.log(this);//Button
//     this.element.addEventListener('click', function(){
//         console.log(this); // 指向this.element 
//         this.element.style.backgroundColor = 'red'; // 不能改变颜色
//     })


    // 法三：改变this指向
    // this.element.addEventListener('click', function(){
    //     console.log(this); // 指向this.element
    //     this.element.style.backgroundColor ='red'; // 不能改变颜色
    // }.bind(this));

    // 法二：
    // this.element.addEventListener('click', function(){
    //     console.log(this); 
    //     this.style.backgroundColor = 'red'; // 不能改变颜色
    // })

    // 法一：箭头函数
    // this.element.addEventListener('click', ()=>{
    //     this.element.style.backgroundColor = 'red'; // 改变颜色
    // })
// }


//1.
Button.prototype.bindEvent = function(){
    this.element.addEventListener('click', this.setBgColor);
}

Button.prototype.setBgColor = function(){
    // 此时 this 指向 this.element
    this.element.style.backgroundColor ='yellow'; // 改变颜色
}
//2.
Button.prototype.bindEvent = function(){
    this.element.addEventListener('click', this.setBgColor.bind(this));
    // 用bind：返回一个全新的函数 （事件函数一定要返回一个函数？）
    // 用call：不返回函数
}

Button.prototype.setBgColor = function(){
    this.element.style.backgroundColor ='yellow'; // 改变颜色
}
