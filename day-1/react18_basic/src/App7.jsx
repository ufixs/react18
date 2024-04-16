import { useState } from "react";

function App() {
    const [count,setCount] = useState(0)
    const [form,setForm] = useState({
        name:'jack'
    })
    return ( 
        <>
            <button onClick={()=>setCount(count+1)}>{count}</button>
            <button onClick={()=>setForm({...form,name:'john'})}>{form.name}</button>
        </>
     );
}

export default App;