import './index.css'
function App() {
    return ( 
        <>
            {/* 不推荐 */}
            <span style={{color:'blue',fontSize:'50px'}}>this is span</span>
            {/* 推荐 */}
            <span className="foo">this is span</span>
        </>
     );
}

export default App;