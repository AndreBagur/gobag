import React, { useState } from 'react';
import ScenarioList from './ScenarioList.jsx';

const ScenarioSelector = ({ scenarios }) => {
  const [targetScenario, setTargetScenario] = useState([])

  const handleChange = (e) => {
    if (!targetScenario.includes(e.target.value)) {
      setTargetScenario(targetScenario.concat(e.target.value))
    }

    console.log(targetScenario);
  }


  return (
    <div>
      <h2>Choose a scenario</h2>
      <select className="scenario-selector"  onChange={(e)=>handleChange(e)}>
        <option value="Choose a Scenario"></option>
        {scenarios.map((scenario, index)=><option key={index}>{scenario.description}</option>)}
      </select>
      <ScenarioList scenarios={ scenarios } targetScenario={targetScenario}/>
    </div>
  )
}

export default ScenarioSelector

//value={targetScenario}