import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, decrementByAmount, increment, incrementByAmount, refesh } from './Redux/Slice/counterSlice'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const [inp, setInp] = useState("")

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div>
        <div>
          <div>
            <button
              aria-label="Increment value"
              onClick={() => dispatch(increment())}
            >
              Increment
            </button>
            <span>{count}</span>
            <button
              aria-label="Decrement value"
              onClick={() => dispatch(decrement())}
            >
              Decrement
            </button>
          </div>
          <div>
            <button onClick={() => dispatch(incrementByAmount(inp))}>Inc Amount</button>
            <input type="text" onChange={(e) => setInp(e.target.value)} />
            <button onClick={() => dispatch(decrementByAmount(inp))}>Dec Amount</button>
            <div>
              <button onClick={() => dispatch(refesh())}>Refesh</button>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
