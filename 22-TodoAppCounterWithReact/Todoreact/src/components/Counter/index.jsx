import React, { useState } from 'react'

import './style.css'

import DecButton from './components/DecButton'
import Count from './components/Count'
import IncButton from './components/IncButton'
import CounterInput from './components/CounterInput'

const Counter = () => {
    let [count,setCount]=useState(0)
    let [valueInp,setValueinp]=useState(1)

  return (
    <div className="counterId">
      <div className='container counter'>
        <DecButton count={count} setCount={setCount}/>
        <Count count={count} setCount={setCount}/>
        <IncButton count={count} setCount={setCount}/>
        <CounterInput  valueInp={valueInp} setValueinp={setValueinp}/>
        
    </div>

    </div>

  )
}

export default Counter