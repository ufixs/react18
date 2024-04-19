import { useDispatch, useSelector } from "react-redux";
// 导入创建action对象的方法
import { increment, decrement, addToNum } from "./store/modules/counterStore"

function App() {
  const {count} = useSelector(state => state.counter)
  // 得到dispatch函数
  const dispatch = useDispatch()
  return (
      <div className="App">
        {/* 调用dispacth提交action对象 */}
        <button onClick={() => dispatch(decrement())}>-</button>
        {count}
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(addToNum([10,20]))}>add to 10</button>
        <button onClick={() => dispatch(addToNum(20))}>add to 20</button>
      </div>
  );
}

export default App;