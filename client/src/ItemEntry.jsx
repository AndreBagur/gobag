import React from 'react'

const ItemEntry = (item, key) => {
  console.log(item);
  const handleClick = (e) => {
    //console.log(e.target.value);
  }
  return (
    <div className="item-entry">
      <input type="checkbox" onClick={(e)=>handleClick(e)}/>{item.item}

    </div>
  )
};

export default ItemEntry

//<i className="fa-solid fa-trash"></i>
//<a className="item-entry-delete-btn">delete</a>