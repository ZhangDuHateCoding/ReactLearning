import React, { Component } from 'react'
//需要下载prop-types,进行校验操作
//给当前的组件类添加一个属性
import PropTypes from 'prop-types'

import CommentItem from '../comment-item/comment-item'
import './commentList.css'




export default class CommentList extends Component {

  //给当前的组件类指定一个属性 更好的写法
  //注意区分组件类和组件对象
  static propTypes = {
      comments: PropTypes.array.isRequired,
      deleteComment: PropTypes.func.isRequired
  } //需要在渲染时读取其中的值

  render() {
    //从属性中读取，先取出来
    const {comments, deleteComment} = this.props
    //<li></li>中的内容要根据{comments}内容变化而变化(comment-item组件中)
    //此时要根据comments 生成一个CommentItem的数组

    //计算是否显示评论语
    const display = comments.length===0? 'block':'none'

    return (
      <div style={{display:'inline-block', float:'right'}} className="col-md-8">
        <h3 className="reply">评论回复</h3>
        <h2 style={{display}}>暂无评论，点击左侧添加评论</h2>
        <ul className="list-group">
            {
                //数组变<li></li>，调用map()
                // 箭头函数指向返回的标签
                //第一个comment必须与comment-item.jsx中名字一致
                //{comment}中的名字要与map()中的形参一致
                comments.map((c, index) => <CommentItem comment={c}  key={index} deleteComment={deleteComment} index={index}/>)
            }
        </ul>
      </div>
    )
  }
}
//除以下更好方法外更好的写法
// CommentList.propTypes ={
//     comments: PropTypes.array.isRequired
// }
