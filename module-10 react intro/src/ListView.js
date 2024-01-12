import React from 'react'
let a = React.version

function ListView() {
  const person = [
    {
      name: "Badal",
      age: 24,
    },
    {
      name: "Vishnu",
      age: 23,
    },
    {
      name: "Akash",
      age: 22,
    }
  ]

  const personList = person.map((p)=>(<h2>{`My Name is ${p.name}, i am ${p.age} years old`}</h2>))

  return (
    <div style={{"marginTop":50}}>
      {personList}
    </div>
  )
}

export default ListView
