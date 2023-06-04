import React from 'react';
import ScenarioList from './ScenarioList.jsx';

const App = () => {
  const scenarios = [{
    description: "Zombie Apocalypse",
    items: [["knife", true], ["water", true], ["gas mask", false], ["clean socks", true]]
  },
  {
    description: "Flood",
    items:[["water", true]]
  }
  ];

  return (
    <div>
      <p>Go Bag</p>
      <ScenarioList scenarios={ scenarios }/>
    </div>


  )
}

export default App