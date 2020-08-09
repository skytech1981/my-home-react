  
import React from 'react';
import './App.css';
import Vip from './data-model/vip';
import Actor from "../src/components/actor"
import Search from './data-model/search';


function App() {
  return (
    <div className="App" >
           <Search/>
          <Actor/>
    </div>
  );
}

export default App;   