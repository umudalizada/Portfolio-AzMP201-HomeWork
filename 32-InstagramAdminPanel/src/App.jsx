import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UsersPanel from './pages/UsersPanel'

function App() {
  const [count, setCount] = useState(0)

  return (
  <UsersPanel/>
  )
}

export default App
