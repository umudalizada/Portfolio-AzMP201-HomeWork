import React from 'react'

const DecButton = ({count, setCount}) => {
  return (
    <div>
        <button onClick={()=>setCount(--count)}>Minus</button>
    </div>
  )
}

export default DecButton