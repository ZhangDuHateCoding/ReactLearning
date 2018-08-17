// 初期固定模式写法
import React, { Component } from 'react'
import logo from '../logo.svg'

export default class App extends Component {
  render() {
    return (
      <div>
        <img className='logo' src={logo} alt="logo"/>
        <p className='title'>React App</p>
      </div>
    )
  }
}

//默认暴露接口
//export default App// 默认暴露时引用不需要加花括号

/*

也可以直接写成
export default class App extends Component{


    render(){
        return (
            <div>
                
            </div>
        )
    }
}
*/
