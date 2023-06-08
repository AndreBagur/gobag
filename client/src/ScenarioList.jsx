import React, { useState, useEffect } from 'react';
import ScenarioListEntry from "./ScenarioListEntry.jsx";
import CircularProgress from '@mui/joy/CircularProgress';


const ScenarioList = ({ scenarios, targetScenario, setTargetScenario }) => {

    var arrayOfScenarios = scenarios.filter((scenario)=>{return targetScenario.includes(scenario.description)})

    var numOfScenarios = arrayOfScenarios.length

    var percentage = numOfScenarios / 3 * 100;

    const message = [
      'Try adding a scenario to increase your preparedness score.',
      'Keep adding more scenarios to increase your score.',
      'One more and you are there.', 'Great job! Keep going!'
    ]

  return (
    <div className="scenario-list">
      <p id="progress-message">{message[numOfScenarios]}</p>
      {numOfScenarios <= 3 ?
      <div id="progress-circle">
        <CircularProgress sx={{"--CircularProgress-size": "70px"}} determinate value={percentage}>
          {numOfScenarios} / 3
        </CircularProgress>
      </div> : null}
      {numOfScenarios > 3 ? <div><p id="scenario-count">{numOfScenarios} scenarios:</p></div> : null }
      {scenarios.filter((scenario)=>{return targetScenario.includes(scenario.description)}).map((scenario, index)=>
        <ScenarioListEntry scenario={scenario} targetScenario={targetScenario} setTargetScenario={setTargetScenario} key={index}/>) }
    </div>
  )
}

export default ScenarioList


