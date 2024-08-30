import { useState } from 'react'
import './App.css'
import Todo from './Todo'
import { TodoContextWrapper } from './context/TodoContext'
import Memo from './Memo'
import Callback from './Callback'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Counter/> */}
      {/* <TodoContextWrapper>
      <Todo/>
      </TodoContextWrapper> */}
      {/* <Todo/> */}
      {/* <Memo/> */}
        <Callback/>
    </>
  )
}

export default App
