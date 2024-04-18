import { useEffect, useState } from "react";

const URL = 'http://geek.itheima.net/v1_0/channels'

function App() {
    const [list,setList] = useState([])

    useEffect(()=>{
        // 额外的操作
        async function getList() {
            const res = await fetch(URL)
            const jsonRes = await res.json()
            setList(jsonRes.data.channels)
        }
        getList()
    },[])

    return (  
        <div>
            this is App
            <ul>
                {list.map((item)=>{
                    return <li key={item.id}>{item.name}</li>
                })}
            </ul>
        </div>
    );
}

export default App;