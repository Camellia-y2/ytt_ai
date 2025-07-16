import { 
  useState,
  Fragment, // 文档碎片组件 首字母大写
} from 'react'
import './App.css'

// function Demo() {
 
//   return (
//     //  用<div></div>作为最外层父元素，DOM树多了一层不需要的节点，DOM解析性能下降，要多迭代一层
//     <Fragment>
//       <h1>Hello World</h1>
//       <p>你好</p>
//     </Fragment>
//   )
// }

const items = [
  {
    id: 1,
    title: '标题1',
    content: '内容1'
  },
  {
    id: 2,
    title: '标题2',
    content: '内容2'
  },
  {
    id: 3,
    title: '标题3',
    content: '内容3'
  }
];
// 函数组件 首字母大写
// 函数组件可以接收参数，参数是一个对象，对象的属性是组件的属性
function Demo({items}) {
  return  items.map(item => {
          return (
            <Fragment key={item.id}>
              <h1>{item.title}</h1>
              <p>{item.content}</p>
            </Fragment>
          )
        })
}


function App() { 

   return (
    <>
      <Demo items={items} />
    </>
  )
}

export default App
