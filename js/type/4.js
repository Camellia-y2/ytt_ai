// 枚举类型
// 枚举类型是一种数据类型，用于定义一组命名的常量。
// 枚举类型可以用于表示一组相关的常量，例如状态、方向、颜色等。

// 枚举类型就像是一个有限的“菜单”，它列出了所有可能的选择，你只能从中挑一个，不能自己随便写别的。
const STATUS={
    //常量
    READY:Symbol('ready'),
    RUNNING:Symbol('running'),
    DONE:Symbol('done')
}

let state = STATUS.READY;
if(state === STATUS.READY){
    console.log('状态是ready');
}