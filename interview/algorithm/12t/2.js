// 场景：在后台管理系统中，从后端获取的菜单、权限等数据通常是扁平列表，需要前端转换为树形结构用于渲染。
// 题目：实现一个函数 buildTree(items, idKey, parentIdKey, rootParentId = null)。
// items: 扁平数组
// idKey: 节点ID的键名（如 'id'）
// parentIdKey: 父节点ID的键名（如 'parentId'）
// rootParentId: 根节点的父ID值（通常为 0, null, 或 undefined）

// // 示例使用
const flatData = [
  { id: 1, name: 'Node 1', parentId: null },
  { id: 2, name: 'Node 2', parentId: 1 },
  { id: 3, name: 'Node 3', parentId: 1 },
  { id: 4, name: 'Node 4', parentId: 2 },
];

function buildTree(items, idKey, parentIdKey, rootParentId = null) {
    // TODO: 实现代码
    const tree = []; // 树形结构
    const map = new Map(); // 哈希表 后续能 Map.get(item[idKey]) O(1) 时间通过 id 找到节点
    items.forEach(item => {
        map.set(item[idKey],{
            ...item,
            children:[] // 增加一个子节点 指向孩子
        })
    })

    // console.log(map);

    // 查找并存储每个节点的子节点
    items.forEach(item => {
        const node = map.get(item[idKey]); // 当前节点
        // 是根节点 → 加入树的顶层
        if(item[parentIdKey] === rootParentId){
            tree.push(node);
        }else{
            // 找每个节点的子节点
            const parentNode = map.get(item[parentIdKey]);
            if(parentNode){
                parentNode.children.push(node); // 子节点添加到父节点的children
            }
        }
    })

    return tree;
}

const treeData = buildTree(flatData, 'id', 'parentId', null)
console.log(treeData);

