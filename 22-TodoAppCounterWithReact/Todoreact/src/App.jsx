import { useState } from 'react'
import './App.css'
import Todolist from './components/Todolist/Index'
import Calculator from './components/Calculator/index'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Todolist/>
<Calculator/>
<Counter/>
    </>
  )
}

export default App
