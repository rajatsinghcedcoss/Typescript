import React, { useEffect, useState } from "react";
function Ab() {
    const [count, setCount] = useState<number>(0);
    const [stop,setStop]=useState<boolean>(false)
    useEffect(() => {
            let interval:any;
            if (stop) {
              interval = setInterval(() => {
                setCount((count) => count + 1);
              }, 1000);
            } else if (!stop) {
              clearInterval(interval);
            }
            return () => clearInterval(interval);
          }, [count,stop]);
        
    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => setStop(true)}>Start</button>
            
            <button onClick={() => setStop(false)}>Stop</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </>
    )
}
export default Ab;