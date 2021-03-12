import React from 'react';

function HeaderComponent( {date} ) {
    const days_of_week = ['일', '월', '화', '수', '목', '금', '토'];

    return (
        <td>
            <div>{days_of_week[date.day]}</div>
            <div>{date.date}</div>
        </td>
    )
}

function SchedulerHeader( {date} ) {
    const dateObj = new Date();

    date = {
        year: dateObj.getFullYear(),
        month: dateObj.getMonth(),
        date: dateObj.getDate(),
        day: dateObj.getDay()
    }

    const 

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
        <HeaderComponent date={date}/>
      </tr>
    )
}

export default SchedulerHeader;