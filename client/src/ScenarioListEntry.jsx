import React from 'react';
import ItemEntry from './ItemEntry.jsx';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';


const ScenarioListEntry = ({scenario, targetScenario, setTargetScenario}) => {

  const handleRemoveClick = (e) => {
    setTargetScenario(targetScenario.filter((element)=>element !== scenario.description));
  }

  return (
    <div>
      <div>{scenario.description}<Button variant="outlined" onClick={(e)=>handleRemoveClick(e)} startIcon={<DeleteIcon />}>
        Delete
      </Button></div>
      {scenario.items.map((item, index)=><ItemEntry item={item} key={index} />)}
    </div>

  )
}

export default ScenarioListEntry

//<a onClick={(e)=>handleRemoveClick(e)}>Remove</a>