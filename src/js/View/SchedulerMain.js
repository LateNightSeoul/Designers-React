import React from 'react';
import { useSelector } from 'react-redux';

// function GridComponent( {} ) {
//   return 
// }

function FirstMainComponent({ hour }) {
  return (
    <tr>
        <td rowSpan={6}>{hour}시</td>
        <td>00분</td>
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

function LeastMainComponent({ minute }) {
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

function MainComponent( { hour, minute }) {
  if(minute === '00분') {
    return <FirstMainComponent hour={hour}/>
  } else {
    return <LeastMainComponent minute={minute}/>
  }
}

function MainContents({ hour }) {
  
    const date = useSelector(state => state.date);

    return (
      <React.Fragment>
      {date[0].minutes.map((minute, i) => {
        return <MainComponent key={i} minute={minute} hour={hour}/>
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
            return <MainContents hour={hour}/>
        })
    )
}


export default SchedulerMain;