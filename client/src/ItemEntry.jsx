import React from 'react'

const ItemEntry = (item) => {
  console.log(item);
  return (
    <div>
      <input type="checkbox"></input>{item.item[0]}
    </div>
  )
}

export default ItemEntry