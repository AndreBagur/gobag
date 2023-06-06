import React, { useState } from 'react';
import ScenarioListEntry from "./ScenarioListEntry.jsx";



const ScenarioList = ({ scenarios, targetScenario, setTargetScenario }) => {
    var count = 0;
    var arrayOfScenarios = scenarios.filter((scenario)=>{return targetScenario.includes(scenario.description)})
    arrayOfScenarios.forEach((scenario)=> {
      count += scenario.items.length
    })


  return (
    <div className="scenario-list">
      <p>{count} {count===1 ? " item" : " items"}</p>
      {arrayOfScenarios.map((scenario, index)=> <ScenarioListEntry scenario={scenario} targetScenario={targetScenario} setTargetScenario={setTargetScenario} key={index} count={count}/>) }
    </div>
  )
}


export default ScenarioList

//{scenarios.filter((scenario)=>{return scenario.description===targetScenario})