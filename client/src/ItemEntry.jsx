import React from 'react'

const ItemEntry = (item, key) => {
  console.log(key);
  return (
    <div>
      <input type="checkbox"/>{item.item[0]}
    </div>
  )
};

export default ItemEntry

//