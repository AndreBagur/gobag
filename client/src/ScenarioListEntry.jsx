import React, { useState, useEffect } from 'react';
import ItemEntry from './ItemEntry.jsx';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
//import Input from '@mui/joy/Input';




const ScenarioListEntry = ({scenario, targetScenario, setTargetScenario}) => {

  const handleRemoveClick = (e) => {
    setTargetScenario(targetScenario.filter((element)=>element !== scenario.description));
  }


  const [showInputBox, setShowInputBox] = useState(false);

  const handleInputBoxClick = () => {

    if (showInputBox) {
      if (newItem !== "") {
        setNewItemArr(newItemArr.concat(newItem));
        setItemCount(itemCount+1)
        setNewItem("");
        setShowInputBox(false);
      } else {
        setShowInputBox(false);
      }
    } else {
      setShowInputBox(true);
    }
  }


  const [newItem, setNewItem] = useState('')
  const [newItemArr, setNewItemArr] = useState([]);

  const handleChange = (e) => {
    setNewItem(e.target.value);
  }
  const [itemCount, setItemCount] = useState(0);
  useEffect(() => {
    const allWithClass = Array.from(
      document.getElementsByClassName('item-entry')
    );
    setItemCount(allWithClass.length);
    console.log(allWithClass.length);
  }, [itemCount]);

  return (
    <div>
      <div className="scenario-description">{scenario.description}<Button variant="outlined" className="scenario-description-btn" onClick={(e)=>handleRemoveClick(e)} startIcon={<DeleteIcon />}>
        Delete
      </Button></div>
      {scenario.items.map((item, index)=><ItemEntry item={item} key={index} itemCount={itemCount} setItemCount={setItemCount} />)}
      {newItemArr.map((item, index)=><ItemEntry item={item} key={index} />)}
      <button id="add-item-btn" onClick={handleInputBoxClick}>+</button>{showInputBox? <input onChange={(e)=>handleChange(e)}/> : null}
    </div>

  )
}

export default ScenarioListEntry

