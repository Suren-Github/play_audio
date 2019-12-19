import React from 'react';

import Header from './components/header';
import Profile from './components/profile';


import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <h3> Audio Player </h3>
        <Header></Header>
      </div>
      <Profile></Profile>
    </div>
  );
}

export default App;
