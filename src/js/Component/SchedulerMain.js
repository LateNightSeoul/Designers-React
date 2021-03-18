import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../css/schedule.css';
import getScheduleHeight from '../../util/getScheduleHeight';
import getSchedules from '../../util/getSchedules';

function GridComponentWithoutSchedule() {
  return ( <td></td> )
}

function GridComponentWithSchedule({ member_name, treatment_type, scheduleHeight }) {
  return (
    <td>    
      <div className={'schedule'} style={{height:scheduleHeight}}>
        <div>
          <div>{treatment_type}</div>
          <div>{member_name}</div>
        </div>
      </div>
  </td>
  )
}

function MainComponent( { hour, minute }) {
  const scheduler = useSelector(state => state.scheduler);
  const date = useSelector(state => state.date);
  let schedule_state = [];
  schedule_state = schedule_state.concat(scheduler);

  const schedules = getSchedules(hour, minute, schedule_state);

  return (
    <tr>
    {(minute === '00분') ? <td rowSpan={6}>{hour}시</td> : null}
    <td>{minute}</td>
    {date[0].dates.map((date, i) => {  
      if(schedules.length > 0 && date === schedules[0].treatment_date) {
        const schedule = schedules.shift(0);
        const scheduleHeight = getScheduleHeight(schedule.start_hour, schedule.end_hour, 
                                                    schedule.start_minute, schedule.end_minute);
        return <GridComponentWithSchedule key={i} 
          member_name={schedule.member_name} 
          treatment_type={schedule.treatment_type} 
          scheduleHeight={scheduleHeight}/>
      } else {
        return <GridComponentWithoutSchedule key={i}/>
      }
    })}
</tr>
  )
}

function MainContents({ hour }) {
    const date = useSelector(state => state.date);

    return (
      <React.Fragment>
      {date[0].minutes.map((minute, i) => {
        return <MainComponent 
                  key={i} 
                  minute={minute} 
                  hour={hour}/>
      })}
      </React.Fragment>
    )
}

function SchedulerMain({ }) {

  const storeInfo = useSelector(state => state.storeInfo);
  const open_hour = storeInfo[0].open_hour;
  const close_hour = storeInfo[0].close_hour;

  const store_time = () => {
      let store_times = [];
      let hour = open_hour;
      while(hour < close_hour) {
          store_times.push(hour);
          hour++;
      }
      return store_times;
  }

  const store_times = store_time();

  return (
      store_times.map((hour, i) => {
          return <MainContents key={i} hour={hour}/>
      })
  )
}


export default SchedulerMain; 
