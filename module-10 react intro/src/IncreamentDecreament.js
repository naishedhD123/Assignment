import React, { useState } from 'react'

function IncreamentDecreament() {
  let [value, setValue] = useState(0);
  return (
    <div>
      <p>React Web</p>
      <h2>{value}</h2>
      <button onClick={()=>{setValue(value - 1)}}>Decreament</button>
      <button onClick={()=>{setValue(value + 1)}}>Increament</button>
      <button onClick={()=>{setValue(value = 0)}}>Reset</button>
    </div>
  )
}

export default IncreamentDecreament
