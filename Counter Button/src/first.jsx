import React, {useState} from "react"
import ReactDOM from "react-dom/client"



function Counter(){
    let [number, setnumber] = useState(0);
    function increase(){
        number++;
        setnumber(number);
    }
    function decrease(){
        number--;
        setnumber(number);
    }
    return(
        <>
            <h1>Counter</h1>
            <h2>Click the Button to Increase Count or Decrease Count.</h2>
            <div>
                <button id="click" onClick={decrease}>Decrease Count</button>
                <button id="click" onClick={increase} style={{marginLeft: "1rem"}}>Increase Count</button>
            </div>
            <p>Current Count: {number}</p>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Counter/>)
