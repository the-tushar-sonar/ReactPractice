import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  const addValue = () => {
    // if (count <= 20) {
    //   setCount(count++)
    // }
    setCount(count + 1)
  }
  const removeValue = () => {
    // if (count >= 0) {
    //   setCount(count--)
    // }
    setCount(count - 1)
  }

  return (
    <>
      <h1 className='text-3xl font-bold mb-8'>Hello React | By Tushar</h1>
      <div>
        <h2 className='text-2xl font-bold'>Counter App</h2>
        <h1 className='text-5xl font-extrabold m-10'>{count}</h1>
        <button onClick={addValue} disabled={count >= 20} className='w-[75px] py-2 m-2 text-3xl rounded-md bg-red-500 text-white font-bold'>+</button>
        <button onClick={removeValue} disabled={count <= 0} className='w-[75px] py-2 m-2 text-3xl rounded-md bg-blue-500 text-white font-bold'>-</button>

      </div>
    </>
  )
}

export default App
