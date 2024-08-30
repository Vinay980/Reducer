import React,{useCallback, useEffect, useMemo,useState} from "react";

function Callback() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("red");
  function handleColor() {
    setColor(`rgba(${Math.trunc(Math.random()*255)},${Math.trunc(Math.random()*255)},${Math.trunc(Math.random()*255)},${Math.trunc(Math.random()*255)})`)
  }

  const printMsg=useCallback(()=>{
    return color
  },[color])

  
  return (
    <div>
      <h1>useCallback() Hook</h1>
      <div
        style={{
          height: "300px",
          width:"500px",
          alignContent: "center",
          textAlign: "center",
          background: color,
        }}
      >
        <h1 style={{ color: "white" }}>{count} </h1>
        <button onClick={() => setCount(count + 1)}>Change Count</button>
        <button onClick={handleColor}>Change Color</button>
      </div>
      <ShowColor printMsg={printMsg}/>
    </div>
  );
}
function ShowColor({printMsg}) {
  useEffect(()=>{
    console.log("Function is Changed");
    
  },[printMsg])
  return(
    <>
      <h1>Child Component</h1>
      <h2>{printMsg()}</h2>
      
    </>
  )
}

export default Callback;
