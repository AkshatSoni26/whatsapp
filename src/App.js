import React from 'react'
import './css/App.css';
import Chat from '../'

function App() {
  return (
    <div id='App' className='container-xxl'>
      <SideBar/>
      <Chat />
    </div>
  );
}

export default App;
