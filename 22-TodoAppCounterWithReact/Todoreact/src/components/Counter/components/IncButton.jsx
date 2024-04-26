import React from 'react'

const IncButton = ({count,setCount}) => {
  return (
    <div>
        <button onClick={()=>setCount(++count)}>Plus</button>
    </div>
  )
}

export default IncButton