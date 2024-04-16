import { useState } from "react"

// 表单受控绑定
function App(){
  // 1.声明一个react状态

  // 2.核心绑定流程
  // 1.通过value属性绑定react状态
  // 2.绑定onChange事件 通过事件参数e拿到输入框最新的值 反向修改到react状态上去
  const [value,setValue] = useState('')
  return(
    <div>
      <input
       value={value} 
       onChange={(e)=>setValue(e.target.value)}
       type="text" 
      />
    </div>
  )
}
export default App