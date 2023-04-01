import React, {useState} from "react";

function App(){
    const currentTime = new Date().toLocaleTimeString();
    const [time, setTime] = useState(currentTime)

    function update(){
        setTime(new Date().toLocaleTimeString())
    }

    setInterval(update, 1000);
    return <div>
        <h1>{time}</h1>
        <button onClick={update}>Update Time</button>
    </div>
}

export default App;