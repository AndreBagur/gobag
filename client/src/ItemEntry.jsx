import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';



const ItemEntry = (item, key) => {
  const [checked, setChecked] = useState(false);
  const [checkedCount, setCheckedCount] = useState(0);
  const checkHandler = (e) => {
    //console.log('checkhandler fired');
    if (checked) {
      //setCheckedCount(checkedCount + 1)
      //console.log('you unchecked an item')
      setChecked(false);
    } else {
      //setCheckedCount(checkedCount - 1)
      //console.log('you checked an item')
      setChecked(true)
    }
    //console.log('checked count ', checkedCount);
    //console.log('checked value', checked);
  }
  const label = { inputProps: { 'aria-label': 'Checkbox' } };


  return (
    <div>
    <div className="item-entry" >
      <Checkbox {...label} checked={checked} onChange={(e)=>checkHandler(e)} color="success"/>{item.item}
    </div>

    </div>

  )
};

export default ItemEntry

