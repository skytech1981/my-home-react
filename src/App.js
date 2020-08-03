  
import React from 'react';
import './App.css';
import Actor from './components/actor'
import ActorsModel from './data-model/actorsmodel'



function App() {
  return (
    <div className="App">
           <Actor/>
          <ActorsModel/>
    </div>
  );
}

export default App;