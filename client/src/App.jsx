import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ScenarioSelector from './ScenarioSelector.jsx'
import ScenarioList from './ScenarioList.jsx';
import AddScenarioModal from './AddScenarioModal.jsx';

const App = () => {

  const [scenarios, setScenarios] = useState([]);
  const [addScenarioModalShow, setAddScenarioModalShow] = useState(false);
  const addScenarioModalClose = () => {
    setAddScenarioModalShow(false);
  }

  useEffect( () => {
    axios
      .get('/gobag')
      .then((scenarioData) => {
        setScenarios(scenarioData.data);
      })
      .catch((err) => {
        console.log('there is an error getting scenarios', err);
      });
  }, []);


  return (
    <div>
      <h1>Go Bag Emergency Preparedness Checklist</h1>
      <ScenarioSelector scenarios={scenarios}/>
      <AddScenarioModal open={addScenarioModalShow} onClose={addScenarioModalClose} />
      <button onClick={()=>{setAddScenarioModalShow(true)}}>Add a scenario</button>
    </div>


  )
}

export default App