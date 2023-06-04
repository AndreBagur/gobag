import React from 'react';
import ItemEntry from './ItemEntry.jsx';

const ScenarioListEntry = ({scenario}) => {

  return (
    <div>{scenario.description}
      {scenario.items.map((item, index)=><ItemEntry item={item} key={index} />)}
    </div>

  )
}

export default ScenarioListEntry