import { useState } from "react"

export default function App() {
    const [name,setName] = useState('')
    const getName = (name)=>{
        // console.log(name);
        setName(name)
    }
    return (
        <div>
            this is App
            <A onGetName={getName}/>
            <B name={name}/>
        </div>
    )
}

function A({onGetName}) {
    const name = 'this is A name'
    return (
        <div>
            this is A component
            <button onClick={()=>onGetName(name)}>子传父,父传子</button>
        </div>
    )
}

function B({name}) {
    return (
        <div>
            this is B component,{name}
        </div>
    )
}

// 1.通过子传父 A -> App
// 2.通过父传子 App -> B