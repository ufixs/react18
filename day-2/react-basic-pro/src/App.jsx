import { useEffect, useRef, useState } from 'react'
import loadsh from 'lodash'
import classNames from 'classnames'
import {v4 as uuidv4} from 'uuid'
import dayjs from 'dayjs'
import axios from 'axios'
import './App.scss'
import data from'./data.js'

const {List,tabs,user} = data


// 封装请求数据的Hook

function useGetList(){
  // useState维护list
  const [commentList,setCommentList] = useState([])
  // 获取接口数据渲染
  useEffect(()=>{
    const getList = async ()=>{
      try{
        const res = await axios.get('http://localhost:3004/list')
        // console.log(res.data);
        setCommentList(res.data)
      }catch(err){
        console.log(err);
      }
    }
    getList()
  },[])
  return {
    commentList,
    setCommentList
  }
}

export default function App(){
  // useState维护list
  const {commentList,setCommentList} = useGetList()

  // 删除评论
  const handleDelete = (rpid)=>{
    setCommentList(commentList.filter(item => item.rpid !== rpid))
  }

  // tab功能切换
  // 1.点击谁就把谁的type记录下来
  // 2.通过记录的type和每一项遍历是的type做匹配，控制激活类名的显示
  const [type,setType] = useState('hot')
  const handleTabChange = (type)=>{
    setType(type)
    // 基于列表的排序
    if(type === 'hot'){
      // 根据点赞数排序
      setCommentList(loadsh.orderBy(commentList,'like','desc'))
    }else{
      // 根据发布时间排序
      setCommentList(loadsh.orderBy(commentList,'ctime','desc'))
    }
  }

  // 发表评论
  //获取评论内容
  const [content,setContent] = useState('')
  const inputRef = useRef(null)
  const handlePublish = ()=>{
    if(!content) return alert('输入框不能为空')
    setCommentList([
      ...commentList,
      {
        // 评论id
        rpid: uuidv4(), //随机id
        // 用户信息
        user: {
          uid: '13258165',
          avatar: '',
          uname: '周杰伦',
        },
        // 评论内容
        content: content,
        // 评论时间
        ctime: dayjs().format('MM-DD HH:mm'), //格式化 月-日 时：分
        like: 88,
      },
    ])
    // 1.清空输入框
    setContent('')
    // 2.重新聚焦
    inputRef.current.focus()
  }

  return (
    <div className="app">
      {/* 导航 Tab */}
      <div className="reply-navigation">
        <ul className="nav-bar">
          <li className="nav-title">
            <span className="nav-title-text">评论</span>
            {/* 评论数量 */}
            <span className="total-reply">{commentList.length}</span>
          </li>
          <li className="nav-sort">
            {/* 高亮类名： active */}
            {
              tabs.map((item)=>( 
                <span 
                  key={item.type} 
                  onClick={()=>handleTabChange(item.type)} 
                  className={classNames('nav-item',{active: item.type === type})}
                >
                  {item.text}
                </span>
              ))
            }
          </li>
        </ul>
      </div>

      <div className="reply-wrap">
        {/* 发表评论 */}
        <div className="box-normal">
          {/* 当前用户头像 */}
          <div className="reply-box-avatar">
            <div className="bili-avatar">
              <img className="bili-avatar-img" src={user.avatar} alt="用户头像" />
            </div>
          </div>
          <div className="reply-box-wrap">
            {/* 评论框 */}
            <textarea
              className="reply-box-textarea"
              placeholder="发一条友善的评论"
              value={content}
              onChange={(e)=>setContent(e.target.value)}
              ref={inputRef}
            />
            {/* 发布按钮 */}
            <div className="reply-box-send">
              <div className="send-text" onClick={handlePublish}>发布</div>
            </div>
          </div>
        </div>
        {/* 评论列表 */}
        <div className="reply-list">
          {/* 评论项 */}
          {commentList.map((item)=>
            <Item key={item.rpid} item={item} onDel={handleDelete}/>
          )}
        </div>
      </div>
    </div>
  )
}

function Item({item,onDel}){
  return (
    <div className="reply-item">
      {/* 头像 */}
      <div className="root-reply-avatar">
        <div className="bili-avatar">
          <img
            className="bili-avatar-img"
            alt=''
            src={item.user.avatar}
          />
        </div>
      </div>
      <div className="content-wrap">
        {/* 用户名 */}
        <div className="user-info">
          <div className="user-name">{item.user.uname}</div>
        </div>
        {/* 评论内容 */}
        <div className="root-reply">
          <span className="reply-content">{item.content}</span>
          <div className="reply-info">
            {/* 评论时间 */}
            <span className="reply-time">{item.ctime}</span>
            {/* 评论数量 */}
            <span className="reply-time">点赞数:{item.like}</span>
            {
              item.user.uid==user.uid && 
              <span className="delete-btn" onClick={()=>onDel(item.rpid)}>删除</span>
            }
          </div>
        </div>
      </div>
    </div>
  )
}