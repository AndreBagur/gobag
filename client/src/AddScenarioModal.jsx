import React, { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';

const MODAL_STYLES = {
  position: 'fixed',
  fontSize: '2em',
  top: '30%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'white',
  color: 'black',
  padding: '50px',
  zIndex: 1000
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
}

const AddScenarioModal = ({open, onClose}) => {

  if (!open) {
    return (null);
  }
  const [description, setDesription] = useState("");
  const [items, setItems] = useState("")

  const handleDescChange = (e) => {
    setDesription(e.target.value)
  }

  const handleItemsChange = (e) => {
    setItems(e.target.value)
  }

  const handleSubmit = () => {
    event.preventDefault();
      console.log(description);
      console.log(items.split("\n"));
      var newItem = {
        "description":description,
        "items":items.split("\n")
      }
      console.log(newItem);
      axios.post('/gobag', newItem)
        .then(()=>{console.log('scenario submitted successfully')})
        .catch((err)=>{console.log('error submitting scenario', err)})
      onClose();
  };


  return (
    <div style={OVERLAY_STYLES}>
    <div style={MODAL_STYLES}>
      <form onSubmit={handleSubmit}>
        <h2>Add a scenario</h2>
        <label htmlFor="decription">
          Description<br></br>
          <input type="text" name="description" id="asm-description" onChange={(e)=>handleDescChange(e)}/>
        </label>
        <br></br>
        <label htmlFor="items">
          Items<br></br>
          <textarea type="text" name="items" id="asm-items" maxLength="1000" onChange={(e)=>handleItemsChange(e)}/>
        </label>
        <br></br>
        <Button variant="contained" id="asm-submit-btn" type="submit">Submit</Button>
        <Button variant="contained" id="asm-exit-btn" onClick={onClose}>Exit</Button>
      </form>
    </div>
    </div>
  )
}

export default AddScenarioModal

