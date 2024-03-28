import React from 'react'
import styled from 'styled-components'

const Product = (props) => {

  const Div = styled.div`
    height:200px;
    width:150px;
    border: 1px solid;
    text-align:center;
    border-radius:5px;
    background:${props.bg};

    span{
      font-weight:500;
    }

  `

  return (
    <Div>
      <img src={props.img} height='80%' width='100%'></img>
      <span>{props.name}</span>
    </Div>
  )
}

export default Product
