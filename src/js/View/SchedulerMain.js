import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSchedule, shiftSchedule } from '../../modules/loadingSchedule';
import Schedule from '../Component/schedule';

function GridComponentWithoutSchedule() {
  return ( <td></td> )
}

function GridComponentWithSchedule({ member_name, treatment_type }) {
  return (
    <td><Schedule member_name={member_name} treatment_type={treatment_type}/></td>
  )
}

function FirstMainComponent({ hour, minute }) {
  // const scheduler = useSelector(state => state.scheduler);
  const date = useSelector(state => state.date);
  const dispatch = useDispatch();
  const loadingSchedule = useSelector(state => state.schedules);

  console.log(loadingSchedule[0]);

  const getSchedule = (hour, minute) => dispatch(getSchedule(hour, minute));
  const shiftSchedule = () => dispatch(shiftSchedule());
  
  // const deleteSchedule = id => dispatch(deleteSchedule(id));

  // function getSchedules() {
  //   let schedules = [];
  //   scheduler.map((schedule, i) => {
  //     if(hour === parseInt(schedule.start_hour) && minute === (schedule.start_minute + '분')) {
  //       schedules.push({
  //         treatment_type: schedule.treatment_type, 
  //         member_name: schedule.member_name,
  //         treatment_date: parseInt(schedule.treatment_date)
  //       });
  //     }
  //   })
  //   return schedules;
  // }

  // const schedules = getSchedules();

  if(loadingSchedule.length > 0) {
    return (
      <React.Fragment>
      <tr>
          <td rowSpan={6}>{hour}시</td> 
          <td>00분</td>
          {/* {date[0].dates.map((date, i) => {  
            if(schedules.length > 0 && date === schedules[0].treatment_date) {
              const schedule = schedules.shift();
              return <GridComponentWithSchedule key={i} member_name={schedule.member_name} treatment_type={schedule.treatment_type} />
            } else {
              return <GridComponentWithoutSchedule key={i}/>
            }
          })} */}
          {date[0].dates.map((data, i) => {
            if(loadingSchedule.length > 0 && date === loadingSchedule[0].treatment_date) {
              shiftSchedule();
              return <GridComponentWithSchedule key={i} 
                member_name={loadingSchedule.member_name} 
                treatment_type={loadingSchedule.treatment_type} />
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
    
  return (
  <tr >
      <td>{minute}</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
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