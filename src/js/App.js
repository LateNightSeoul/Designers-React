import React from 'react';
import { useSelector } from 'react-redux';
import '../css/App.css';
import './Component/SchedulerHeader';
import SchedulerContainer from './Component/SchedulerContainer';

function App() {

  const scheduler = useSelector(state => state.scheduler[0]);
  const storeInfo = useSelector(state => state.storeInfo[0]);
  const date = useSelector(state => state.date[0]);

  return (
    <SchedulerContainer/>
  );
}

export default App;
