import React from 'react';
import { useSelector } from 'react-redux';
import '../css/App.css';
import './Component/SchedulerHeader';
import SchedulerContainer from './Component/SchedulerContainer';

function App() {
  return (
    <SchedulerContainer/>
  );
}

export default App;
