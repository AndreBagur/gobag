import React, { useState } from 'react';
import ScenarioList from './ScenarioList.jsx';

const ScenarioSelector = ({ scenarios }) => {
  const [targetScenario, setTargetScenario] = useState('')



  return (
    <div>
      <h2>Choose a scenario</h2>
      <select className="scenario-selector"  onChange={(e)=>setTargetScenario(e.target.value)}>
        <option value="Choose a Scenario"></option>
        {scenarios.map((scenario, index)=><option key={index}>{scenario.description}</option>)}
      </select>
      <ScenarioList scenarios={ scenarios } targetScenario={targetScenario}/>
    </div>
  )
}

export default ScenarioSelector

//value={targetScenario}