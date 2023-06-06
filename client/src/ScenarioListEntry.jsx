import React from 'react';
import ItemEntry from './ItemEntry.jsx';


const ScenarioListEntry = ({scenario, targetScenario, setTargetScenario}) => {

  const handleRemoveClick = (e) => {
    setTargetScenario(targetScenario.filter((element)=>element !== scenario.description));
  }

  return (
    <div>
      <div>{scenario.description}<a onClick={(e)=>handleRemoveClick(e)}>Remove</a></div>
      {scenario.items.map((item, index)=><ItemEntry item={item} key={index} />)}
    </div>

  )
}

export default ScenarioListEntry

