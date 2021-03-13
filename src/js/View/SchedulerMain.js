import React from 'react';

function MainComponent({ hour }) {
    return (
        <React.Fragment>
        <tr>
        <td rowSpan={6}>
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

      <tr>
        <td>
          10분
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>

      <tr>
        <td>
          20분
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>

      <tr>
        <td>
          30분
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>

      <tr>
        <td>
          40분
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>

      <tr>
        <td>
          50분
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
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
            return <MainComponent hour={hour}/>
        })
    )
}

export default SchedulerMain;