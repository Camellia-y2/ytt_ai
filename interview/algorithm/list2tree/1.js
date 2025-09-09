// 列表项在数据库中怎么存储的？比如省、市、县...
// 树状菜单

// title     id     parent
//  中国      86      null
//  江西      36       86    
//  抚州     0793      36
//  临川     11201    0793
// 体育路    231254   11201

const sourceList = [
    {
        id: 1,
        name: '首页',
        parentId: 0
    },
    {
        id: 2,
        name: '产品',
        parentId: 1
    },
    {
        id: 3,
        name: '手机',
        parentId: 2
    },
    {
        id: 4,
        name: '电脑',
        parentId: 2
    },
    {
        id: 5,
        name: '折叠屏',
        parentId: 3
    },
]

function listToTree(list, parentId) {
    
}

const tree = listToTree(sourceList, 0);
console.log(tree);
