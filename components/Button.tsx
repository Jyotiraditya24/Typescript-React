import React from 'react'

type Props = {
    handleClick:(event: React.MouseEvent<HTMLButtonElement>,id:Number)=> void
}

// HTMLButtonElement == html button click 

const Button = (props: Props) => {
  return (
    <button onClick={(event)=>props.handleClick(event,1)}>Button</button>
  )
}

export default Button