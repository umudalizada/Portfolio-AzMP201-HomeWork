import React from 'react'

const Allbtn = ({num1,num2,result,setResult}) => {
  return (
    <div className='allbtns'>
        <button onClick={()=>{
          result=Number(num1)+Number(num2)
          setResult(result)
        }}>+</button>
        <button onClick={()=>{
          result=Number(num1)-Number(num2)
          setResult(result)
        }}>-</button>
        <button onClick={()=>{
          if(num2!==0){
            result=Number(num1)/Number(num2)
            setResult(result)
          }
          else{
            alert("0-la bolme mumkun deyil")
          }
        }}>/</button>
        <button onClick={()=>{
          result=Number(num1)*Number(num2)
          setResult(result)
        }}>*</button>
    </div>
  )
}

export default Allbtn