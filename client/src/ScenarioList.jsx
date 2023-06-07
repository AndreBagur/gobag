import React, { useState, useEffect } from 'react';
import ScenarioListEntry from "./ScenarioListEntry.jsx";
import CircularProgress from '@mui/joy/CircularProgress';


const ScenarioList = ({ scenarios, targetScenario, setTargetScenario }) => {

    var arrayOfScenarios = scenarios.filter((scenario)=>{return targetScenario.includes(scenario.description)})

    var numOfScenarios = arrayOfScenarios.length

    var percentage = numOfScenarios / 3 * 100;

    const message = ['Try adding a scenario to increase your preparedness score.', 'Keep adding more scenarios to increase your score.', 'One more and you are there.', 'Great job! Keep going!']

  return (
    <div className="scenario-list">
      {numOfScenarios <= 3 ? <div><CircularProgress size="lg" determinate value={percentage}>
        {numOfScenarios} / 3
      </CircularProgress><small id="progress-message">{message[numOfScenarios]}</small></div> : null}
      <p id="scenario-count">{numOfScenarios}{(numOfScenarios)===1 ? " scenario:" : " scenarios:"}</p>
      {scenarios.filter((scenario)=>{return targetScenario.includes(scenario.description)}).map((scenario, index)=> <ScenarioListEntry scenario={scenario} targetScenario={targetScenario} setTargetScenario={setTargetScenario} key={index}/>) }
    </div>
  )
}

export default ScenarioList


