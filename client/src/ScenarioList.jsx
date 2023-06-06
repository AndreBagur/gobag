import React from 'react';
import ScenarioListEntry from "./ScenarioListEntry.jsx";



const ScenarioList = ({ scenarios, targetScenario, setTargetScenario }) => {

  return (
    <div className="scenario-list">
      {scenarios.filter((scenario)=>{return targetScenario.includes(scenario.description)}).map((scenario, index)=> <ScenarioListEntry scenario={scenario} targetScenario={targetScenario} setTargetScenario={setTargetScenario} key={index}/>) }
    </div>
  )
}


export default ScenarioList

//{scenarios.filter((scenario)=>{return scenario.description===targetScenario})