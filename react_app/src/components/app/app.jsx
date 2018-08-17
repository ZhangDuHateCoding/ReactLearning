import React, { Component } from 'react'
import CommentAdd from '../comment-add/comment-add'
import CommentList from '../comment-list/comment-list'

export default class componentName extends Component {
  // 多个组件需要数据交互，于是将多个组件的交互写在父组件上面
  
  // constructor(props){
  //   super(props)
  //   // 设置初始化状态，评论列表的评论内容用数组展示
  //   this.state={
  //     comments:[
  //       {username:"Tom", content:"example comment 1"},
  //       {username:"Alice", content:"example comment 2"},
  //     ]
  //   }
  // } //存在简化写法
  //给组件对象指定state属性
  //以下为简化写法，无需写constructor(props){super(props)}
 
  
  state = {
    comments:[
      {username:"Tom", content:"example comment 1"},
      {username:"Alice", content:"example comment 2"},
    ]
  }

  //添加指定评论
  addComment = (comment) =>{
    const {comments} = this.state
    comments.unshift(comment)
    //更新状态
    this.setState({comment})
  }

  //删除指定评论(comment-item组件调用该函数进行删除)
  //通过数组下标删除数组项
  deleteComment =(index) =>{
    const {comments} = this.state
    comments.splice(index, 1)//splice()可实现增删改
    this.setState({comments})
  }

  render() {
    const {comments} = this.state
    
    return (
      <div>
        <header className="site-header jumbotron">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <h1>请发表对React的评论</h1>
                    </div>
                </div>
            </div>
        </header>
        
        <div className="container">
          <CommentAdd addComment={this.addComment}/>
          {/* 为CommentLisy标签添加自定义属性 */}
          <CommentList comments={comments} deleteComment={this.deleteComment}/>
        </div>
      </div>
    )
  }
}
