import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const foodsStore = createSlice({
    name:'foods',
    initialState:{
        // 商品列表
        foodsList: [],
        // 菜单激活下标值
        activeIndex: 0,
        // 购物车列表
        cartList:[],
    },
    reducers:{
        // 更改商品列表
        setFoodsList(state,action){
            state.foodsList = action.payload
        },
        // 更改activeIndex
        changeActiveIndex(state,action){
            state.activeIndex = action.payload
        },
        // 添加购物车
        addCart(state,action){
            //是否添加过？
            const item = state.cartList.find(item=>item.id === action.payload.id)
            if(item){
                item.count++
            }else{
                state.cartList.push(action.payload)
            }
        },
        // count减
        decreCount(state,action){
            const item = state.cartList.find(item=>item.id === action.payload.id)
            if(item.count > 1){
                item.count--
            }else{
                state.cartList = state.cartList.filter((item)=>{
                    return item.id !== action.payload.id
                })
            }
        },
        // 清除购物车
        clearCart(state){
            state.cartList = []
        }
    }
})
const reducer = foodsStore.reducer
const { setFoodsList, changeActiveIndex, addCart, decreCount, clearCart } = foodsStore.actions
// 异步
const fetchFoodsList = ()=>{
    return async (dispatch)=>{
        const res = await axios.get('http://localhost:3004/takeaway')
        const newData = res.data.map((item)=>{
            const newFoods = item.foods.map((item2)=>{
                return {...item2,count:1}
            })
            return {...item,foods:newFoods}
        })
        dispatch(setFoodsList(newData))
    }
}

export default reducer
export { fetchFoodsList, changeActiveIndex, addCart, decreCount, clearCart }