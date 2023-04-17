import React, { useState } from 'react';
import './App.css';
import StartScreen from './routes/StartScreen.js';
import Authentication from './routes/Authentication.js';
import Verification from './routes/Verification.js';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Modal from 'react-modal';

function App() {
  const navigator = useNavigate();
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <StartScreen navigator={navigator}/> }/>
        <Route path='/Authentication' element={ <Authentication navigator={navigator}/> }/>
        <Route path='/Verification' element={ <Verification navigator={navigator}/> }/>
      </Routes>
    </div>
  );
}

export default App;
