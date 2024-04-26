import React from 'react'

const Result = ({result,setResult}) => {
  return (
    <div className='result'>
      <label htmlFor="">Result</label>
        <input value={result} type="text" onChange={()=>setResult(e.target.value)} />
    </div>
  )
}

export default Result