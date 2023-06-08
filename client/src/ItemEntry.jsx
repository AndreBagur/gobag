import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';



const ItemEntry = ({item}) => {

  const [checked, setChecked] = useState(false);

  const label = { inputProps: { 'aria-label': 'Checkbox' } };

  return (
    <div>
      <div className="item-entry" >
        <Checkbox {...label} checked={checked} onChange={()=>setChecked(!checked)} color="success"/>{item}
      </div>
    </div>

  )
};

export default ItemEntry

