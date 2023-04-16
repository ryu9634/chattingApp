import React from 'react';
import './App.css';
import logo1 from './images/logo/LINE_logo1.png';

function App() {
  return (
    <div className="App">

      <div className='start-screen'>
        <div className='start-screen__elements'>
          <img src={logo1} alt='로고' className='logo'/>
          <h3>환영합니다.</h3>
          <span>무료 메시지와 영상통화, 음성통화를 부담 없이 즐겨보세요!</span>
        </div>
        <button className='main-color__btn margin-top-150'>Start Messaging</button>
      </div>
    </div>
  );
}

export default App;
