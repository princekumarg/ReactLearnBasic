import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function random(){
    setCount(Math.floor(Math.random()*10))
  }
  return (
    <>
      <h1>Count:{count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrment</button>
      <button onClick={random}>Random</button>
    </>
  )
}

export default App
