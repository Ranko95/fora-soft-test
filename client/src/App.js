import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Join from './pages/Join/Join';
import Chat from './pages/Chat/Chat';
// import requireAuth from './utilities/Authenticate/Authenticate';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Join} />
        <Route exact path="/chat" component={Chat} />
      </Switch>
    </div>
  );
}

export default App;
