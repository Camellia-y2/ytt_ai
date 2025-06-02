const panels=document.querySelectorAll(".qq-panel");
// console.log(panels);//集合
panels.forEach((panel)=>{
    // JS 是事件机制的语言
    panel.addEventListener("click",()=>{
        // console.log("click");
        document.querySelector(".qq-panel_active").classList.remove("qq-panel_active");
        panel.classList.add("qq-panel_active");
    })
})