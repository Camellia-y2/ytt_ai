# JSX 考点
- 何为 JSX？
    - JS in XML( HTML 是 XML的一种形式)
    - react 推崇的JavaScript 扩展语法, 是 JavaScript 的语法糖，允许在 JavaScript 中嵌入 HTML 结构（function return JSX 组件）
      常用于React组件的定义，使得UI结构更直观易读。
      React的一大优点特性。
- JSX可以直接运行吗？
    不可以
- 类比：
    - .styl -> stylus 编译 -> .css
    <ul>
        <li key={todo.id}>{todo.text}</li>
        ...
    </ul>
    - JSX -> 虚拟DOM：React.createElement(tag, props, children) ->  真实DOM：document.createElement(tag) 
        虚拟DOM就是用JS对象模拟DOM节点，这样我们就可以用JS的方式来操作DOM节点
        - 例子：
            <h1 className='title'>hello, world</h1>
            编译后：
            React.createElement('h1', {className: 'title'}, 'hello, world')
            编译后：
            {
                type: 'h1',
                props: {
                    className: 'title',
                    children: 'hello, world'
                }
            }
            