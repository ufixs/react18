import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const channelStore = createSlice({
    name:'channel',
    // 初始化
    initialState:{
        channelList:[]
    },
    // 修改方法
    reducers:{
        setChannels(state,action){
            state.channelList = action.payload
        }
    }
})

const channelReducer = channelStore.reducer
export default channelReducer

// 异步请求部分
const { setChannels } = channelStore.actions
const fetchChannleList = () => {
    return async (dispatch) => {
        const res = await axios.get('http://geek.itheima.net/v1_0/channels')
        // console.log(res);
        dispatch(setChannels(res.data.data.channels))
    }
}
export { fetchChannleList }

