import React from 'react';

function MainComponent( { minute }) {
  return (
    <tr >
      <td>
        {minute}
      </td>
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

function MainContents({ hour }) {

  const minutes = ['10분', '20분', '30분', '40분', '50분'];

    return (
        <React.Fragment>
      <tr>
        <td rowSpan={6} className={hour+'hour'}>
          {hour}시
        </td>
        <td>
          00분
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>

      {minutes.map((minute, i) => {
        return <MainComponent minute={minute}/>
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