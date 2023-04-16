import React, { useEffect, useState } from 'react';
import './App.css';
import StartScreen from './components/StartScreen.js';
import Authentication from './components/Authentication.js';
import { Route, Routes, useNavigate } from 'react-router-dom';

function App() {
  const [page, setPage] = useState(0);
  const navigator = useNavigate();
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <StartScreen navigator={navigator} page={page} setPage={setPage} /> }/>
        <Route path='/Authentication' element={ <Authentication/> }/>
      </Routes>
    </div>
  );
}

export default App;
