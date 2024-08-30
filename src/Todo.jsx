import React, { useReducer, useState } from 'react'
import todoReducer from './TodoReducer'
import { useTodo } from './context/TodoContext'

function Todo() {
    const[todos,dispatch]=useReducer(todoReducer,[])
    const[task,setTask]=useState("")
    const[editId,setEditId]=useState(null)
    const addTask=()=>{
        if(editId==null){
            dispatch({type:"add",payload:task})
        setTask("")
        } else{
            dispatch({type:"edit",payload:{editId,task}})
            setEditId(null)
            setTask("")
        }
    }
    const editTask=(id)=>{
        setEditId(id)
        let obj=todos.find(ele=>ele.id===id)
        setTask(obj.task)
    }
  return (
    <>
        <h1>ToDo App</h1>
        <div className="input">
            <input type="text" value={task} onChange={(e)=>setTask(e.target.value)} />
            <button onClick={addTask}>{editId?"Update":"ADD"}</button>
        </div>
        <div className="tasks">
            {
                todos.map(ele=>{
                    return <div key={ele.id}>
                        <b>{ele.task}</b>
                        <button onClick={()=>editTask(ele.id)}>Edit</button>
                        <button onClick={()=>dispatch({type:"delete",payload:ele.id})}>Delete</button>
                    </div>
                })
            }
        </div>
        
    </>
  )
}

export default Todo