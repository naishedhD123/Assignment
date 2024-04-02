import React from 'react'
import { Link } from 'react-router-dom'

function Services() {
  return (
    <div>
      <h2>Services</h2>
      <Link to={'/service1'}>Service1</Link>{" "}
      <Link to={'/service2'}>Service2</Link>{" "}
      <Link to={'/service3'}>Service3</Link>
    </div>
  )
}

export default Services
