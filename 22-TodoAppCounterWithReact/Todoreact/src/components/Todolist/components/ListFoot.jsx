import React from 'react'
import LiforList from './LiforList'



const ListFoot = ({list,setList}) => {
  return (
    
    <ul>
        {list.map((elem,i)=>{
            return <LiforList key={i} value={elem} list={list} setList={setList} />


        })}
    </ul>
  )
}

export default ListFoot