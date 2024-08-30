import React, { useMemo, useState } from "react";

function Memo() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("red")
  function handleColor() {
    setColor(`rgb(${Math.trunc(Math.random()*255)},${Math.trunc(Math.random()*255)},${Math.trunc(Math.random()*255)},${Math.trunc(Math.random()*255)})`)
  }
  // function setNumber() {
  //   for(let i=0;i<=100000000;i++){

  //   }
  //   return count*100
  // }
  // let getNumber=setNumber(  )

  let getNumber=useMemo(()=>{
    console.log('hi');
    
    for (let i = 0; i <= 1000000000; i++) { }
    return count*100
  },[count])

  return (
    <div>
      <h1>useMemo() Hook</h1>
      <div style={{height:'300px',alignContent:"center",textAlign:"center",background:color}}>
        <h1 style={{color:'white'}}>{count} </h1>
        <button onClick={()=>setCount(count+1)}>Change Count</button>
        <button onClick={handleColor}>Change Color</button>
      </div>
    </div>
  );
}

export default Memo;
