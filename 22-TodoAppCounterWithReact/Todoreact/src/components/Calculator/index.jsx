
import Allbtn from "./components/Allbtn"
import CalcInp from "./components/CalcInp"
import Result from "./components/Result"
import "./style.css"
import React, { useState } from 'react'

const Calculator = () => {
    
    let [result, setResult] = useState(0);
    let [num1, setNum1] = useState(0);
    let [num2, setNum2] = useState(0);

  return (

<div className="calc">
<div className="container inputs">
  <h1>Calculator</h1>

<CalcInp num1={num1} num2={num2} setNum1={setNum1} result={result} setResult={setResult} setNum2={setNum2}/>
<Allbtn result={result} setResult={setResult} num1={num1} num2={num2} setNum1={setNum1} setNum2={setNum2}/>
<Result result={result} setResult={setResult} num1={num1} num2={num2} setNum1={setNum1} setNum2={setNum2}/>

</div>

</div>


  )
}

export default Calculator