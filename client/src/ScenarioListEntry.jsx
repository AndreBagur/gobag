import React, { useState } from 'react';
import ItemEntry from './ItemEntry.jsx';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';


const ScenarioListEntry = ({scenario, targetScenario, setTargetScenario}) => {
  //const [count, setCount] = useState(scenario.items.length);
  //setCount(count );
  //console.log(count);

  ////////
  ///need to receive previous count and add together in some way to add total number of items
  //console.log(scenario)
  //console.log(scenario.items.length);
  //const [items , setItems] = useState([]);
  //setItems(items.concat(scenario.items))
  //setItems(scenario.items);
  //const [items, setItems] = useState(0);
  //setItems(items + scenario.items.length);


  const handleRemoveClick = (e) => {
    setTargetScenario(targetScenario.filter((element)=>element !== scenario.description));
  }

  return (
    <div>
      <div className="scenario-description">{scenario.description}<Button variant="outlined" className="scenario-description-btn" onClick={(e)=>handleRemoveClick(e)} startIcon={<DeleteIcon />}>
        Delete
      </Button></div>
      {scenario.items.map((item, index)=><ItemEntry item={item} key={index} />)}
    </div>

  )
}

export default ScenarioListEntry

//<a onClick={(e)=>handleRemoveClick(e)}>Remove</a>

//{scenario.items.map((item, index)=><ItemEntry item={item} key={index} />)}