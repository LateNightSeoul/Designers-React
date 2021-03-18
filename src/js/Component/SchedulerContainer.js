import React from 'react';
import { useSelector } from 'react-redux';
import SchedulerHeader from './SchedulerHeader';
import SchedulerMain from './SchedulerMain';

function SchedulerContainer() {

  return (
    <table className="tables">
      <SchedulerHeader/>
      <SchedulerMain/>
    </table>
  );
}

export default SchedulerContainer;
