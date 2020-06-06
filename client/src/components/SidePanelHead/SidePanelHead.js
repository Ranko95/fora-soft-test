import React from 'react';
import './SidePanelHead.css';

function SidePanelHead({icon, name}) {
  return (
    <div className="side-panel-head">
      <img src={icon} alt="icon" />
      <h3>{name}</h3>
  </div>
  )
}

export default SidePanelHead;
