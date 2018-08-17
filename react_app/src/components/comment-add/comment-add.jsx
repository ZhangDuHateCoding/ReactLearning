import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class CommentAdd extends Component {
  //初始化评论内容
  state = {
    username:'',
    content:''
  }
  //声明方法，才可以被app.jsx调用
  static propTypes ={
    addComment: PropTypes.func.isRequired
  }
  //箭头函数，无需this.handleSubmit = this.handleSubmit.bind(this)
  //因为箭头函数没有自己的this，没有自己的this即要看看全局的this(即组件对象)，因此在方法中无需绑定this
  handleSubmit = () => {
    //收集输入的数据，最终更新数组(状态state)
    //1.收集数据 并封装成comment对象(state就是comment对象)
    const comment = this.state
    //2.更新状态：(受控组件自动收集，非受控组件手动收集)
    //使用受控组件必须有状态state来接受
    //重要：数据再哪个组件，更新数据的行为就应该在哪个组件，所以将其函数写在app.jsx中。并在app.jsx中直接调用之<CommentAdd />，在comment-add.jsx中声明
    this.props.addComment(comment)
    //清除输入数据
    this.setState({
      username:"",
      content:""
    })
  }

  handleNameChange = (event) => {
    const username = event.target.value
    this.setState({username})
  }

  handleContentChange = (event) => {
    const content = event.target.value
    this.setState({content})
  }

  render() {
    //日常，先取了再说
    const {username, content} = this.state
    return (
      <div style={{display:'inline-block'}} className="col-md-4">
        <form className="form-horizontal" action="">
          <div className="form-group">
            <label>用户名</label>
            <input type="text" className="form-control" placeholder="用户名" 
                value={username} onChange={this.handleNameChange}/>
          </div>
          <div className="form-group">
            <label>评论内容</label>
            <textarea className="form-control" rows="6" placeholder="评论内容" 
            value={content} onChange={this.handleContentChange}></textarea>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="button" className="btn btn-default pull-right" onClick={this.handleSubmit}>提交</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
