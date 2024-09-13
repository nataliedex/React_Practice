import React from 'react'
import {add, subtract, multiply, divide} from "./math.js"

const Math = () => {
  return (
    <div>
        <ul>
            <li>{add(2,33)}</li>
            <li>{subtract(9,3)}</li>
            <li>{multiply(2,8)}</li>
            <li>{divide(2,7)}</li>
        </ul>
    </div>
  )
}

export default Math