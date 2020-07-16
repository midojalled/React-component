import React from 'react';
import './profile/Style.css';
import PF from './profile/ProfilePhoto.js';
import NM from './profile/FullName.js';
import ADRS from './profile/Address.js';
function App() {
  return (
    <div className="App">
      <PF/>
      <NM/>
      <ADRS/>
    </div>
  );
}

export default App;
