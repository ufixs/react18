import { createSlice } from "@reduxjs/toolkit"

const counterStore = createSlice({
    name:'counter',    // 名字
    // 初始化state
    initialState:{     
        count:0,
    },
    // 修改state,编写修改数据的方法 同步方法 支持直接修改
    reducers:{
        // 加
        increment(state){
            state.count++
        },
        // 减
        decrement(state){
            state.count--
        },
        // 
        addToNum(state,action){
            console.log(action);
            state.count = action.payload
        },
    }
})

// 获取reducer
const counterReducer = counterStore.reducer
// 默认导出的方式导出reducer
export default counterReducer

// 结构出来actionCreater函数
const { increment, decrement, addToNum } = counterStore.actions
// 以按需导出的方式导出actionCreater
export { increment, decrement, addToNum }

