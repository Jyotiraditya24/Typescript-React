import React from 'react'

type Props = {
    handleClick:()=> void
}

const Button = (props: Props) => {
  return (
    <div onClick={props.handleClick}>Button</div>
  )
}

export default Button