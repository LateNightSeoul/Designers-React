import React from 'react';
import { useSelector } from 'react-redux';
import '../css/App.css';
import '../js/View/SchedulerHeader';
import SchedulerHeader from '../js/View/SchedulerHeader';
import SchedulerMain from '../js/View/SchedulerMain';

function App() {

  const scheduler = useSelector(state => state.scheduler[0]);
  const storeInfo = useSelector(state => state.storeInfo[0]);

  // console.log(state);
  console.log(scheduler);
  console.log(storeInfo);

  return (
    <table className="tables">
      <SchedulerHeader/>
      <SchedulerMain 
        open_hour={storeInfo.open_hour} 
        close_hour={storeInfo.close_hour}/>
    </table>
  );
}

export default App;
