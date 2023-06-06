import React, { useState, useEffect } from 'react';
import ScenarioListEntry from "./ScenarioListEntry.jsx";



const ScenarioList = ({ scenarios, targetScenario, setTargetScenario }) => {
    // var count = 0;
    var arrayOfScenarios = scenarios.filter((scenario)=>{return targetScenario.includes(scenario.description)})
    // arrayOfScenarios.forEach((scenario)=> {
    //   count += scenario.items.length
    // })
    var numOfScenarios = arrayOfScenarios.length

  //var numOfTasks = document.getElementsByClassName('item-entry').length;
  //console.log(numOfTasks);


  return (
    <div className="scenario-list">
      <p id="scenario-count">You are preparing for {numOfScenarios}{(numOfScenarios)===1 ? " scenario:" : " scenarios:"}</p>
      {scenarios.filter((scenario)=>{return targetScenario.includes(scenario.description)}).map((scenario, index)=> <ScenarioListEntry scenario={scenario} targetScenario={targetScenario} setTargetScenario={setTargetScenario} key={index}/>) }
    </div>
  )
}


export default ScenarioList




//<p>{count} {(count)===1 ? " item" : " items"}</p>