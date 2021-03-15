import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../css/schedule.css';
import getSchedules from '../../util/getSchedules';

function GridComponentWithoutSchedule() {
  return ( <td></td> )
}

function GridComponentWithSchedule({ member_name, treatment_type }) {
  return (
    <td>    
      <div className={'schedule'}>
        <div>
          <div>{treatment_type}</div>
          <div>{member_name}</div>
        </div>
      </div>
  </td>
  )
}

function FirstMainComponent({ hour, minute }) {
  const scheduler = useSelector(state => state.scheduler);
  const date = useSelector(state => state.date);
  let schedule_state = [];
  schedule_state = schedule_state.concat(scheduler);

  const schedules = getSchedules(hour, minute, schedule_state);

  if(schedules.length > 0) {
    return (
      <React.Fragment>
      <tr>
          <td rowSpan={6}>{hour}시</td> 
          <td>00분</td>
          {date[0].dates.map((date, i) => {  
            if(schedules.length > 0 && date === schedules[0].treatment_date) {
              const schedule = schedules.shift(0);
              return <GridComponentWithSchedule key={i} member_name={schedule.member_name} treatment_type={schedule.treatment_type} />
            } else {
              return <GridComponentWithoutSchedule key={i}/>
            }
          })}
      </tr>
      </React.Fragment>
      )
  } else {
    return (
      <React.Fragment>
      <tr>
        <td rowSpan={6}>{hour}시</td>
        <td>00분</td>
        {date[0].dates.map((date, i) => (<GridComponentWithoutSchedule key={i}/>))}
      </tr>
      </React.Fragment>
      )
  }
}

function LeastMainComponent({ hour, minute }) {

  const scheduler = useSelector(state => state.scheduler);
  const date = useSelector(state => state.date);
  let schedule_state = [];
  schedule_state = schedule_state.concat(scheduler);

  const schedules = getSchedules(hour, minute, schedule_state);

  if(schedules.length > 0) {
  return (<tr >
      <td>{minute}</td>
      {date[0].dates.map((date, i) => {  
            if(schedules.length > 0 && date === schedules[0].treatment_date) {
              const schedule = schedules.shift(0);
              return <GridComponentWithSchedule key={i} member_name={schedule.member_name} treatment_type={schedule.treatment_type} />
            } else {
              return <GridComponentWithoutSchedule key={i}/>
            }
          })}
  </tr>)
  } else {
  return (  <tr >
      <td>{minute}</td>
      {date[0].dates.map((date, i) => (<GridComponentWithoutSchedule key={i}/>))}
  </tr>)
  }
    
  return (
  <tr >
      <td>{minute}</td>
      {}
  </tr>
    )
}

function MainComponents( { hour, minute }) {
  
  if(minute === '00분') {
    return <FirstMainComponent hour={hour} minute={minute}/>
  } else {
    return <LeastMainComponent hour={hour} minute={minute}/>
  }
}

function MainContents({ hour }) {
  
    const date = useSelector(state => state.date);
    const scheduler = useSelector(state => state.scheduler);
    let schedules = [];
    schedules = schedules.concat(scheduler);

    return (
      <React.Fragment>
      {date[0].minutes.map((minute, i) => {
        return <MainComponents 
                  key={i} 
                  minute={minute} 
                  hour={hour}/>
      })}
      </React.Fragment>
    )
}

function SchedulerMain({ open_hour, close_hour }) {
    
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
