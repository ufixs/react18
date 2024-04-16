// 定义文章类型
const articleType = 0 // 0 1 3

// 定义核心函数（根据文章类型返回不同的jsx模板）
function getArticleTem(){
    if(articleType === 0){
        return <div>我是无图文章</div>
    }else if(articleType === 1){
        return <div>我是单图模式</div>
    }else{
        return <div>我是三图模式</div>
    }
}

function App() {
    return ( 
        <div className="App">
            {/* 调用函数来渲染不同的模板 */}
            {getArticleTem()}
        </div>
     );
}

export default App;