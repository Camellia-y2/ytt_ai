import { Component } from "react";
import Child from './Child'

class LifecycleDemo extends Component {
    // 状态、生命周期
    // JSX
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
        }

    doIncrement=()=>{
        this.setState({
            count: this.state.count + 1
        })
    }  
    }
    componentDidMount(){
        console.log("componentDidMount")
    }
    componentDidUpdate(){
        console.log("componentDidUpdate")
    }
    componentWillUnmount(){
        console.log("componentWillUnmount")
    }

   render() {
    return(
        <div>
            <h1>生命周期演示</h1>
            <p>Count: {this.state.count}</p>
            <button onClick={doIncrement.bind(this)}>+1</button>
            <Child title={"hello"}></Child>
        </div>
    )
   }
}

export default LifecycleDemo