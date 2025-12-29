import React from 'react'
const Button = (props) => {
  return (
    <>
    <button className={props.className} onClick={()=>{props.change(props.op)}}>{props.title}</button>
    </>
  )
}
export default Button;