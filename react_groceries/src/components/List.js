import { useState } from 'react'
// import React from 'react'
const List = ({ item, brand, units, quantity, buy }) => {
  const [bought, setBought] = useState(buy)

  const change = () => {
    setBought(!buy)
  }

  return (
    <div>
      <h2>
        {/* <input type="checkbox" /> */}
        {item}
      </h2>
      <h3>{brand}</h3>
      <h4>Units: {units}</h4>
      <h4>Quantity: {quantity}</h4>
      <input type="button" onClick={change} value="Remove" />
      {bought ? <h3>Is Purchased</h3> : ''}
    </div>
  )
}

export default List
