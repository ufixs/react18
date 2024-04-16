function App() {
    const list = [
        {id:1001,name:'Vue'},
        {id:1002,name:'React'},
        {id:1003,name:"Angular"}
    ]
    return ( 
        <>
            <div>
                this is App2
                {/* 渲染列表 */}
                {/* map 循环哪个结构 return结构 */}
                {/* 注意加key值 */}
                <ul>
                    {list.map((item) => {
                        return <li key={item.id}>{item.name}</li>
                    })}
                </ul>
            </div>
        </>
     );
}

export default App;