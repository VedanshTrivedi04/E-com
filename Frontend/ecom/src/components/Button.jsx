import React from 'react'
import Button from 'react-bootstrap/Button';

const Button = (props) => {
  return (<>
        <button className="btn btn-outline-success me-2">{props.text}</button>

  
  
  </>
  )
}

export default Button