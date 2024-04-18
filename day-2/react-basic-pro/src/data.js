// 评论列表数据
import avatar from './images/bozai.png'

const List = [
    {
      // 评论id
      rpid: 3,
      // 用户信息
      user: {
        uid: '13258165',
        avatar: '',
        uname: '周杰伦',
      },
      // 评论内容
      content: '哎哟，不错哦',
      // 评论时间
      ctime: '10-18 08:15',
      like: 88,
    },
    {
      rpid: 2,
      user: {
        uid: '36080105',
        avatar: '',
        uname: '许嵩',
      },
      content: '我寻你千百度 日出到迟暮',
      ctime: '11-13 11:29',
      like: 88,
    },
    {
      rpid: 1,
      user: {
        uid: '30009257',
        avatar,
        uname: '黑马前端',
      },
      content: '学前端就来黑马',
      ctime: '10-19 09:00',
      like: 100,
    },
  ]
  // 当前登录用户信息
  const user = {
    // 用户id
    uid: '30009257',
    // 用户头像
    avatar,
    // 用户昵称
    uname: '黑马前端',
  }
  // 导航 Tab 数组
  const tabs = [
    { type: 'hot', text: '最热' },
    { type: 'time', text: '最新' },
  ]

export default {List,tabs,user}