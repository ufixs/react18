// App -> A -> B

import { createContext, useContext } from "react"

// 1.createContext方法创建一个上下文对象
const MsgContext = createContext()
// 2.在顶层组件，通过Provider组件去提供数据

// 3.在底层组件，通过useContext钩子函数来使用数据

export default function App() {
    const msg = 'this is app msg'
    return (  
        <div>
            <MsgContext.Provider value={msg}>
                this is App
                <A/>
            </MsgContext.Provider>
        </div>
    )
}

function A() {
    return (
        <div>
            this is A component
            <B/>
        </div>
    )
}

function B() {
    const msg = useContext(MsgContext)
    return (
        <div>
            this is B component,{msg}
        </div>
    )
}