export default function App() {
    return ( 
        <div>
            <Button>123</Button>
        </div>
     );
}
// eslint-disable-next-line react/prop-types
function Button({children}){
    console.log(children);
    return <button>click me</button>
}