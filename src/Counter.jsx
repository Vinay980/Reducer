import React, { useReducer, useState } from 'react'
import countReducer from './reducers/CountReducers'


// component
function Counter() {

    // useReducer Declaration
    const[state,dispatch]=useReducer(countReducer,0)
    const[input,setInput]=useState('')
  return (
    <>
    <h1>Counter</h1>
    <h1>{state} </h1>
    <div>
        <button onClick={()=>dispatch({type:"inc1"})}>+1</button>
        <button onClick={()=>dispatch({type:"dec1"})}>-1</button>
        <button onClick={()=>dispatch({type:"inc5"})}>+5</button>
        <button onClick={()=>dispatch({type:"dec5"})}>-5</button>
        <button onClick={()=>dispatch({type:"inc10"})}>+10</button>
        <button onClick={()=>dispatch({type:"dec10"})}>-10</button>
        </div>
        <div>
            <input type="number" onChange={(e)=>setInput(e.target.value)} value={input}/>
            <button onClick={()=>dispatch({type:'input',payload:input}) }>Change the Count</button>
        </div>
    </>
)
}

export default Counter