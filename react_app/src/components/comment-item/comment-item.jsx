import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './commentItem.css'

export default class CommentItem extends Component {

  //当前组件要接收评论-要显示“什么人说什么话”
  //接收属性前先声明
  static propTypes ={
      //接收一个comment对象
      comment: PropTypes.object.isRequired,
      deleteComment: PropTypes.func.isRequired
  }

  handleClick=()=>{
      const {comment, deleteComment, index} = this.props
      //提示(confirm()是全局方法，需要用window来调用，不然会报错)
      if(window.confirm(`确认删除${comment.username}的评论吗?`))
      //确认后删除
      deleteComment(index)
  }

  render() {
    const {comment} = this.props

    return (
        <li className="list-group-item">
            <div className="handle">
                <a href="jacascript:;" onClick={this.handleClick}>删除</a> 
            </div>
            <p className="user"><span>{comment.username}</span><span>说：</span></p>
            <p className="sentence">{comment.content}</p>
        </li>
    )
  }
}
