// 防抖：只在最后一次触发后执行
function debunce(fn, delay) {
    let timerId = null;
    return function(...args){
        if(timerId) {
            clearTimeout(timerId)
        }
        timerId = setTimeout(()=>{
            fn.apply(this,args);
            timerId = null;
        },delay)
    }
}

// 使用例子：搜索输入、按钮防重复点击	
const input = document.getElementById('input');
input.addEventListener('change', debunce((e)=>{
        console.log(e.target.value)
    },500)
)

// 节流：在一定时间内，只执行一次
function throttle(fn, delay) {
    let lastTime = 0;
    return function(...args) {
        let newDate = new Date();//时间戳
        if(newDate - lastTime >= delay) {
            fn.apply(this,args);
        }
        lastTime = newDate;
    }
}

// 例子：监听滚动，鼠标移动
window.addEventListener('scroll',  throttle(()=>{
        console.log('滚动')
    },100)
)
