import React from 'react';
import './Error.css';

function Error({error}) {
  return (
    <div className="error-container">
      <h3>Ooops, an error occured</h3>
      <span>{error}</span>
    </div>
  )
}

export default Error;
