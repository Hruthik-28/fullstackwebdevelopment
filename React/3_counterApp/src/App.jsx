import { useState } from "react"

function App() {
  let [count, setCount] = useState(0)

  function increment(){

    count = count + 1
    setCount(count)
    
  }
  function decrement(){
    if (count < 0) {
      setCount(0)
    }else if(count > 0){
      count = count - 1
      setCount(count)
    }
    
  }
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-xl px-8 pt-6 pb-8 mb-4 mt-20 border-gray-200 border-2 font-mono">
      <h1 className="text-center text-3xl font-bold  mb-4"> Counter</h1>

      <input 
      type="text" 
      value={count} 
      readOnly
      className="text-center w-full border-2 border-gray-200 text-6xl outline-none rounded-xl mb-5" 
      />

      <div className="flex justify-around">
        <button 
        className="bg-gray-200 p-4 rounded-lg hover:bg-gray-300 transition-all"
        onClick={increment}
        >
          Increment
        </button>
        <button 
        className="bg-gray-200 p-4 rounded-lg  hover:bg-gray-300 transition-all"
        onClick={decrement}
        >
          Decrement
        </button>
      </div>

    </div>
  )
}

export default App
