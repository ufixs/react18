import { useState } from "react"

export default function App() {
    const [msg,setMsg] = useState('')
    const getMsg = (msg)=>setMsg(msg)
    return (  
        <div>
            this is App,{msg}
            <Son onGetSonMsg={getMsg}/>
        </div>
    )
}

function Son({onGetSonMsg}){
    const sonMsg = 'this is son msg'
    return (
        <div>
            this is Son
            <button onClick={()=>onGetSonMsg(sonMsg)}>子传父</button>
        </div>
    )
}

// 核心：在子组件中调用父组件中的函数并传递实参