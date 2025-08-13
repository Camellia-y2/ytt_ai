const target = {
    field1: 1,
    field2: undefined,
    field3: 'hxt',
    field4: {
        child: 'child',
        child2: {
            child2: 'child2'
        }
    },
    filed5: [2, 4, 8]
}
target["target"] = target; // 循环引用
// es6新的数据结构 hash Map
// function clone(target, map = new Map()) {
// WeakMap对内存回收很敏感
function clone(target, map = new WeakMap()) {
    if (typeof target === 'object') {
        let cloneTarget = Array.isArray(target)?[]:{};
        if(map.get(target)) {
            return map.get(target);
        }
        map.set(target, cloneTarget);
        for (const key in target) {
            cloneTarget[key] = clone(target[key], map);
        }
        return cloneTarget;
    } else {
        return target
    }
}
// 栈溢出
clone(target);