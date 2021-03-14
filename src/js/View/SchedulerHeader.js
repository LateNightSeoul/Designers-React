import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';

function HeaderComponent( { date, day } ) {
    return (
        <td>
            <div>{date}</div>
            <div>{day}</div>
        </td>
    )
}

function SchedulerHeader( {} ) {

    const { days, dates } = useSelector(state => ({
        days: state.date[0].days,
        dates: state.date[0].dates
    }), shallowEqual);

    return (
        <tr>
        <td>
          <div>시</div>
          <div></div>
        </td>
        <td>
          <div>분</div>
          <div></div>
        </td>
        {days.map((day, idx) => (
            <HeaderComponent key={idx} date={dates[idx]} day={day}/>))}
      </tr>
    )
}

export default SchedulerHeader;