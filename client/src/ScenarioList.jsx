import React from 'react';
import ScenarioListEntry from "./ScenarioListEntry.jsx";



const ScenarioList = ({ scenarios, targetScenario }) => {

  return (
    <div className="scenario-list">
      {scenarios.filter((scenario)=>{return scenario.description===targetScenario}).map((scenario, index)=> <ScenarioListEntry scenario={scenario} key={index}/>) }
    </div>
  )
}


export default ScenarioList