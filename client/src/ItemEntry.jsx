import React, { useState } from 'react'


const ItemEntry = (item, key) => {
  const [isChecked, setIsChecked] = useState(false);

  const checkHandler = () => {
    setIsChecked(!isChecked);
  }

  return (
    <div className="item-entry">
      <input type="checkbox" key={key} checked={isChecked} onChange={checkHandler}/>{item.item}
    </div>
  )
};

export default ItemEntry

//<i className="fa-solid fa-trash"></i>
//<a className="item-entry-delete-btn">delete</a>
//<input type="checkbox" />

