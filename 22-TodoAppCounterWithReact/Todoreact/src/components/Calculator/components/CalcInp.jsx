import React from 'react'


const CalcInp = ({num1, num2, setNum1,setNum2}) => {


  return (
    <div className='inputsDiv'>
      <label htmlFor="">Number One</label>
        <input type="number" value={num1} onChange={(e)=>setNum1(e.target.value)}/>
        <label htmlFor="">Number Two</label>
        <input type="number" value={num2} onChange={(e)=>setNum2(e.target.value)}/>
    </div>
  )
}

export default CalcInp