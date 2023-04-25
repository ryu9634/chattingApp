import React, { useState } from 'react';
import './App.css';
import StartScreen from './routes/StartScreen.js';
import Authentication from './routes/Authentication.js';
import Verification from './routes/Verification.js';
import SetNickName from './routes/SetNickName.js';
import Home from './routes/Home.js';
import { Route, Routes, useNavigate } from 'react-router-dom';

function App() {
  const navigator = useNavigate();
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <StartScreen navigator={navigator}/> }/>
        <Route path='/Authentication' element={ <Authentication navigator={navigator}/> }/>
        <Route path='/Verification' element={ <Verification navigator={navigator}/> }/>        
        <Route path='/SetNickName' element={ <SetNickName navigator={navigator}/> }/>
        <Route path='/Home' element={ <Home navigator={navigator}/> }/>        
      </Routes>
    </div>
  );
}

export default App;
