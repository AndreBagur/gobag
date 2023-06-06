import React, { useState } from 'react';
//import QuestionEntry from './QuestionEntry.jsx';

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'white',
  color: 'black',
  padding: '50px',
  zIndex: 1000
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
}

const AddScenarioModal = ({open, onClose}) => {

  if (!open) {
    return (null);
  }


  const handleSubmit = () => {

      onClose();
  };


  return (
    <div style={OVERLAY_STYLES}>
    <div style={MODAL_STYLES}>
      <form>
        <div>
          <h2>Add a scenario</h2>
          <input type="text"/>
        </div>

      </form>

      <button onClick={handleSubmit}>Submit</button>
      <button onClick={onClose}>Exit</button>

    </div>
    </div>
  )
}

export default AddScenarioModal

