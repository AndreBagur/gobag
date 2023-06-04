import React from 'react';
import ScenarioListEntry from "./ScenarioListEntry.jsx";


const ScenarioList = ({ scenarios }) => {

  return (
    <div className="scenario-list">
      {scenarios.map((scenario, index)=> <ScenarioListEntry scenario={scenario} key={index}/>) }
    </div>
  )
}


export default ScenarioList