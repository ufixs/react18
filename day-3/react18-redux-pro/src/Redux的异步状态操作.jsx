import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchChannleList } from "./store/modules/channelStore";

function App() {
    const { channelList } = useSelector(state => state.channel)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchChannleList())
    },[dispatch])
    return (
        <div>
            <ul>
                {channelList.map((item)=>{
                    return <li key={item.id}>{item.name}</li>
                })}
            </ul>
        </div>
    );
}

export default App;