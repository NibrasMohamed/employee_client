import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Company from './Components/Company/Company';
import Employee from './Components/Employee/Employee';
import Leave from './Components/Leave/Leave';
import TopBar from './Components/Layout/TopBar';

function App() {
  return (
    <div className="App">
      <TopBar />
        <Routes>
          <Route path='/company' element={<Company />}/>
          <Route path='/employee' element={<Employee />}/>
          <Route path='/leave' element={<Leave />}/>
        </Routes>
    </div>
  );
}

export default App;
