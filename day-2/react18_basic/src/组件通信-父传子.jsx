export default function App() {
    const name = 'this is app name'
    return ( 
        <>
            <Son 
                name={name}
                age={18}
                isTrue={false}
                list={['vue','react']}
                obj={{name:'jack'}}
                cb={()=>console.log('123')}
            >
                <span>this is span</span>
            </Son>
        </>
    )
}

function Son({name,age,isTrue,list,obj,cb,children}){
    // console.log(name,age,isTrue,list,obj,cb,childen);
    return (
        <>
            <div>
                jsx:{children}
                {name}
            </div>
        </>
    )
}