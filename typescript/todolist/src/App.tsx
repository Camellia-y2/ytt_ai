import HelloComponent from './components/HelloComponent.tsx'
import './App.css'
// 技术栈 react + typescript
// 大型项目里面 javascript可能会有点问题 主要因为弱类型
// jsx 后缀改成tsx

// 对函数进行类型约束
// const HelloComponent = () => {
//   // reactNode 空
//   return 1
// }
function App() {
  // 编译阶段
  // 多写了类型声明
  // 多写了一些代码 类型声明 代码质量保驾护航
  let count: number = 10;
  const title:string = "hello ts";
  const isDone: boolean = true;
  const list:number[] = [1, 2, 3]
  // 元组类型
  const tuple: [number, string, boolean] = [1, "2", true]
  // 枚举类型
  // enum Status {
  //   Pending,
  //   Fullfilled,
  //   Rejected
  // }
  // const pStatus: Status = Status.Pending;

  //对象的约束
  // 接口类
  interface IUser {
    name: string;
    age: number;
    isSingle?: boolean; // 可以不return
  }
  // 使用interface来约定类型
  const user: IUser = {
    name: "张三",
    age: 18,
    isSingle: true
  }
  return (
    <>
      {count}
      {title}
      {/* {pStatus} */}
      {user.name} {user.age}
      {/* 修改 HelloComponent 函数，使其返回有效的 JSX 元素 */}
      {/* typescript很严格 */}
      <HelloComponent name='一鸣' />
    </>
  )
}

export default App
