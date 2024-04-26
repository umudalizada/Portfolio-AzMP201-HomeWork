import React from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from "uuid";

const InpTop = ({list, setList}) => {
    let [inputValue, setCount] = useState("")

  return (
    <div className='forinput'>
    <input type="text" value={inputValue} onChange={(e)=>setCount(e.target.value)}/>
    <button onClick={()=>{
        if(inputValue!=="" && inputValue!==null){
            let obj={
                id: uuidv4(),
                value:inputValue,
            }
    
            setList([...list,obj])
    
            setCount("")

        }
      

    }}>Add</button>
    </div>
  )
}

export default InpTop




