import { useRef } from "react";

// React获取DOM
function App() {
    // 1.useRef生成ref对象 绑定到dom标签上
    // 2.dom可用时，ref.current获取dom
    // 渲染完毕之后dom生成之后才可用
    const inputRef = useRef(null)
    const showDom = ()=>{
        console.log(inputRef.current.value);
    }
    return ( 
        <>
            <input ref={inputRef} type="text" />
            <button onClick={showDom}>点击</button>
        </>
     );
}

export default App;