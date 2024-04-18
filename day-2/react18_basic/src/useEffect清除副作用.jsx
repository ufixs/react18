import { useEffect, useState } from "react";

export default function App() {
    const [show,setShow] = useState(true)
    return (  
        <div>
            this is App
            {show && <Son/>}
            <button onClick={()=>setShow(false)}>卸载Son组件</button>
        </div>
    )
}

function Son() {
    // 1.渲染时开启定时器
    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log('定时器执行中');
        },1000)
        
        return ()=>{
            // 清除副作用（组件卸载时会自动执行）
            clearInterval(timer)
        }
    },[])
    return <div>this is Son</div>
}