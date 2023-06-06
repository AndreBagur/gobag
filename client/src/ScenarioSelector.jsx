import React, { useState } from 'react';
import ScenarioList from './ScenarioList.jsx';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const ScenarioSelector = ({ scenarios }) => {
  const [targetScenario, setTargetScenario] = useState([])

  const handleChange = (e) => {
    if (!targetScenario.includes(e.target.value)) {
      setTargetScenario(targetScenario.concat(e.target.value))
    }

    //console.log(targetScenario);
  }


  return (
    <div className="scenario-selector-div">
      <FormControl fullWidth>
        <InputLabel id="scenario-selector-input">Choose a scenario</InputLabel>
        <Select
          labelId="scenario-selector"
          id="scenario-selector"
          value=""
          label="choose-a-scenario"
          onChange={handleChange}>
          {scenarios.map((scenario, index)=><MenuItem value={scenario.description} key={index}>{scenario.description}</MenuItem>)}
        </Select>
      </FormControl>
      <ScenarioList scenarios={ scenarios } targetScenario={targetScenario} setTargetScenario={setTargetScenario}/>
    </div>
  )
}

export default ScenarioSelector

