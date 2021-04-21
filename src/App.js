import React from 'react';
import './App.css';
import HeaderArea from './HeaderArea/HeaderArea';
import MainArea from './MainArea/MainArea';
import AppFaq from './faq'
function App() {
  return (
    <div className="App">
    <HeaderArea/>
    <MainArea/>
    <AppFaq/>
    </div>
  );
}

export default App;
