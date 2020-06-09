import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Join from './pages/Join/Join';
import Signup from './pages/Signup/Signup';
import Chat from './pages/Chat/Chat';
import requireAuth from './utilities/Authenticate/Authenticate';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/join" component={Join} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/" component={requireAuth(Chat)} />
      </Switch>
    </div>
  );
}

export default App;
