import React from 'react';
import ScenarioSelector from './ScenarioSelector.jsx'
import ScenarioList from './ScenarioList.jsx';

const App = () => {
  const scenarios = [{
    description: "Zombie Apocalypse",
    items: ["knife", "water", "gas mask", "clean socks"]
  },
  {
    description: "Flood",
    items:["water"]
  },
  {
    description: "Volcanic Eruption",
    items: ["sturdy shoes", "food and water", "respiratory protection"]
  }
  ];



  return (
    <div>
      <h1>Go Bag Emergency Preparedness Checklist</h1>
      <ScenarioSelector scenarios={ scenarios }/>
    </div>


  )
}

export default App