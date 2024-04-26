import React from 'react'

const CounterInput = ({valueInp,setValueinp}) => {
  return (
    <div>
        <input type="text" value={valueInp} onChange={(e)=> setValueinp(e.target.value)} />
    </div>
  )
}

export default CounterInput