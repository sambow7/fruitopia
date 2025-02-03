import React from 'react'
import "./Fruits.component.css"

function Fruits() {
  return (
    <ul>
    {
      fruits.map((fruit) => (
        <li key={fruit.id}>
          <div className={`fruit ${fruit.inStock? 'in-stock' : 'out-of-stock'}`}>
            {fruit.emoji} {fruit.name} - {fruit.color}
          </div>
        </li>
      ))
    }
   </ul>
  )
}

export default Fruits