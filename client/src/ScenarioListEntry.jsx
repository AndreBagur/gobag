import React, { useState, useEffect } from 'react';
import ItemEntry from './ItemEntry.jsx';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Input from '@mui/joy/Input';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';




const ScenarioListEntry = ({scenario, targetScenario, setTargetScenario }) => {

  const handleRemoveClick = (e) => {
    setTargetScenario(targetScenario.filter((element)=>element !== scenario.description));
  }


  const [showInputBox, setShowInputBox] = useState(false);

  const handleInputBoxClick = () => {
    if (showInputBox) {
      if (newItem !== "") {
        //adds new item to list of items
        setNewItemArr(newItemArr.concat(newItem));
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

  const [expanded, setExpanded] = useState(true);

  const handleCollapseClick = () => {
    setShowInputBox(false);
    setExpanded(!expanded);
  }

  const handleKeyPress = (e)=> {
    if (e.key === 'Enter') {
      handleInputBoxClick();
    }
  }

  return (
    <div className="scenario-card">
      <div className="scenario-description">{scenario.description}
        <Button variant="outlined" className="scenario-description-btn" onClick={(e)=>handleRemoveClick(e)} startIcon={<DeleteIcon />}>Delete</Button>
      </div>
      {expanded ? <div>{scenario.items.map((item, index)=><ItemEntry item={item} key={index} />)}
      {newItemArr.map((item, index)=><ItemEntry item={item} key={index} />)}
      {showInputBox? <Input onChange={(e)=>handleChange(e)} onKeyPress={(e)=>handleKeyPress(e)} /> : null}</div> : null}
      <Button onClick={handleCollapseClick}>{expanded ? <ExpandLessIcon></ExpandLessIcon> : <ExpandMoreIcon></ExpandMoreIcon>} items</Button>
      <Button id="add-item-btn" onClick={handleInputBoxClick}>+ item</Button>
    </div>

  )
}

export default ScenarioListEntry

