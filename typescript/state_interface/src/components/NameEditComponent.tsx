import React from 'react';

interface Props {
    useName: string;
    // typeScript 中除了内置的类型外，还可以自定义类型
    // React提供的类型 事件类型 ChangeEvent
    // type="radio" type="checkbox" 会发生Change事件的不止这一种
    // 所以指定为HTMLInputElement  不是所有target阶段都有value属性的，可以放心使用e.target.value。
    // ts要对重要的地方进行约束，不会出错  减少99.99%的错误
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const NameEditComponent:React.FC<Props> = (props) => {
  return (
    <div>
        <label>Update name:</label>
      <input type="text" value={props.useName} onChange={props.onChange} />
    </div>
  )
}