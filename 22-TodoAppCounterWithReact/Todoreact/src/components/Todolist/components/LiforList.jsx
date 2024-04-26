

import React, { useState } from 'react'

const LiforList = ({key,value,list,setList}) => {
    let [edit,setEdit]=useState("")
    console.log(edit);
  return (
    <li> 
        {value.value}

        <div className="editdelete">
        <button className='editButton' onClick={()=>{

            
let promptvalue=prompt("EDIT: ", value.value)
setEdit(promptvalue)
let editArray=list.map((elem)=>{
    if(elem.id==value.id){
        return{id:elem.id, value:promptvalue}
    }
    return elem
})
setList(editArray)

}}>Edit</button>



<button className='delButton'
onClick={()=>{
let array=list.filter((elem)=>elem.id!=value.id)
setList(array)
}}>Delete</button>

        </div>

    </li>
  )
}

export default LiforList