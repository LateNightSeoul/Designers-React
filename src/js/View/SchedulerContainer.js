import React from 'react';
import { useSelector } from 'react-redux';
import SchedulerHeader from './SchedulerHeader';
import SchedulerMain from './SchedulerMain';

function SchedulerContainer() {

  const scheduler = useSelector(state => state.scheduler);
  const storeInfo = useSelector(state => state.storeInfo[0]);
  const date = useSelector(state => state.date[0]);

  function paintSchedule() {
    scheduler.map((schedule, i) => {
        let hi = document.getElementsByTagName('td');
        console.log(hi);
    })
  }

  paintSchedule();

  return (
    <table className="tables">
      <SchedulerHeader/>
      <SchedulerMain 
        open_hour={storeInfo.open_hour} 
        close_hour={storeInfo.close_hour}/>
    </table>
  );
}

export default SchedulerContainer;
