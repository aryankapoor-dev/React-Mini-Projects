import React, { useState } from "react";
import ReactDOM from "react-dom/client"
function findterm(num){
        if(num<=1){
            return num;
        }
        return findterm(num-1)+findterm(num-2);
        
    }
function Fibonacci(){
    const [number, setNumber] = useState(1)
    return(
        <>
            <h1>Fibonacci Term Finder</h1>
            <input type="number" id="inp" value={number} onChange={(event)=>{setNumber(event.target.value);}}/>
            <div>
                <h2>The term  is: {findterm(number)}</h2>
            </div>
        </>
    )
    
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Fibonacci/>)