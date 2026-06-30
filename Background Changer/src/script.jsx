import React, {useState, useEffect} from "react"
import ReactDOM from "react-dom/client"

function Background(){
    const [color, setColor] = useState("#f6faff")
    useEffect(()=>{
        document.body.style.backgroundColor = color;
    },[color])
    
    
    return(
        <>
            <h1>Click the Area to Change Color</h1>
            <div>
                <button onClick={()=>setColor("#0400ff")} style={{background: "#0400ff"}} id="first">Blue</button>
                <button onClick={()=>setColor("#008158")} style={{background: "#008158"}}>Green</button>
                <button onClick={()=>setColor("#f87800")} style={{background: "#f87800"}}>Orange</button>
                <button onClick={()=>setColor("#ff0000")} style={{background: "#ff0000"}}>Red</button>
                <button onClick={()=>setColor("#9e2d00")} style={{background: "#9e2d00"}}>Brown</button>
            </div>
            
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Background/>)