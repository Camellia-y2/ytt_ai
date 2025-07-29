// 如何约束函数的返回值为ReactNode? JSX类型
// FC == FunctionComponent
// 如何约定自己需要一个name的props?
interface Props {
    name: string;
}
// typescript 类型约束，重要的地方一定要类型约束
// 参数和返回值重要，对于函数来说
// 泛型 泛指内部的类型
// const HelloComponent: React.FC<Props> = (props:Props) => {
const HelloComponent: React.FC<Props> = (props) => {
    // const {name} = props; //解构的也是对象，用interface
    return (
        <div>
            <h1>hello user:{props.name}</h1>
        </div>
    )
}
export default HelloComponent