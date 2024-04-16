function App() {
    const handeClick = (e,name)=>{
        console.log("button被点击了",e,name);
    }
    return ( 
        <div>
            <button onClick={(e)=>handeClick(e,'jack')}>
                click me
            </button>
        </div>
     );
}

export default App;