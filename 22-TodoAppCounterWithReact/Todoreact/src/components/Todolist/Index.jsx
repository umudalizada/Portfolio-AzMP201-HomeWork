import InpTop from "./components/InpTop"
import ListFoot from "./components/ListFoot"
import "./style.css"
import React, { useState } from 'react'

const Index = () => {

let [list, setList]=useState([])
  return (
<div className="todoId">
<div className="container todolist">
    <h1>TODO LIST</h1>
    <InpTop list={list} setList={setList}/>
    <ListFoot  list={list} setList={setList} />

</div>

</div>


  )
}

export default Index