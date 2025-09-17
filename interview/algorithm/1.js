function createRouter(){
    const router = {
        obj : {
            "name": "",
            "params": {
                "id": ""
            },
            "url": [],
        },
        addRoute(path, name) {
            this.obj.name = name; // 传入对象中保存
            const urlArr = path.split("/");
            //urlArr.foreach((item)=>{
                //if(item[0]===':'){
                   // this.obj.params.id = 
              //  }
           // })
            this.obj.url.concat(urlArr); // 分割成数组传入对象
            
        },
        match(currentPath) {
            let isFind = false;
            const flag = {
                "name": "",
                "params": {
                    
                }
            }
            const arr = currentPath.split('/');
            if(arr[0] == this.obj.name){
                isFind = true;
                flag.name = arr[0];
            
                arr.map((item,index)=>{
                    if(item[0]=='0'||item[0]=='1'||item[0]=='2'||item[0]=='3'
                      || item[0]=='4'||item[0]=='5'||item[0]=='6'||item[0]=='7'
                      || item[0]=='8'||item[0]=='9'
                      ){
                        flag.params = item; //存入params
                    }

                })
            }
            
            if(!isFind) return null;
            return flag;
        }
    }

    return router;
}


// 事件冒泡 父亲true  儿子false 点击儿子
// script不带defer async ,html渲染是怎么样的
// 