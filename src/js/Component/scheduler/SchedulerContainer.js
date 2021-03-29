import React from 'react';
import ReservationContainer from './ReservationContainer';
import SchedulerHeader from './SchedulerHeader';
import SchedulerMain from './SchedulerMain';

function SchedulerContainer() {

  return (
    <div className="grid-container">
      <main>
      <table className="tables">
        <SchedulerHeader/>
        <SchedulerMain/>
      </table>
      </main>

      <aside>
        <div className="aside-menu">
          <div>예약내역</div>
          <div>예약신청내역</div>
          <div></div> 
        </div>
        <ReservationContainer/>
      </aside>
    </div>
  );
}

export default SchedulerContainer;
