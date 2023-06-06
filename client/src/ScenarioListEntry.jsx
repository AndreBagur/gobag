import React, { useState } from 'react';
import ItemEntry from './ItemEntry.jsx';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';


const ScenarioListEntry = ({scenario, targetScenario, setTargetScenario}) => {

  const handleRemoveClick = (e) => {
    setTargetScenario(targetScenario.filter((element)=>element !== scenario.description));
  }


  const [showInputBox, setShowInputBox] = useState(false);

  const handleInputBoxClick = () => {

    if (showInputBox) {
      if (newItem !== "") {
        setNewItemArr(newItemArr.concat(newItem))
        setNewItem("")
        setShowInputBox(false)
      } else {
        setShowInputBox(false)
      }
    } else {
      setShowInputBox(true)
    }

  }

  const [newItem, setNewItem] = useState('')
  const [newItemArr, setNewItemArr] = useState([]);

  const handleChange = (e) => {
    setNewItem(e.target.value);
  }

  return (
    <div>
      <div className="scenario-description">{scenario.description}<Button variant="outlined" className="scenario-description-btn" onClick={(e)=>handleRemoveClick(e)} startIcon={<DeleteIcon />}>
        Delete
      </Button></div>
      {scenario.items.map((item, index)=><ItemEntry item={item} key={index} />)}
      {newItemArr.map((item, index)=><ItemEntry item={item} key={index} />)}
      <button id="add-item-btn" onClick={handleInputBoxClick}>+</button>{showInputBox? <input onChange={(e)=>handleChange(e)}></input> : null}
    </div>

  )
}

export default ScenarioListEntry

