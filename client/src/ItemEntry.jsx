import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';


const ItemEntry = (item, key) => {
  const [isChecked, setIsChecked] = useState(false);

  const checkHandler = () => {
    setIsChecked(!isChecked);
  }
  const label = { inputProps: { 'aria-label': 'Checkbox' } };

  return (
    <div className="item-entry">
      <Checkbox {...label} color="success"/>{item.item}
    </div>
  )
};

export default ItemEntry

//<i className="fa-solid fa-trash"></i>
//<a className="item-entry-delete-btn">delete</a>
//<input type="checkbox" />

/*
    <div className="item-entry">
      <input type="checkbox" key={key} checked={isChecked} onChange={checkHandler}/>{item.item}
    </div>
*/