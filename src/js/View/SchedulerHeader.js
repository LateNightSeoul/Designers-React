import React from 'react';

function HeaderComponent( { date, day } ) {
    return (
        <td>
            <div>{date}</div>
            <div>{day}</div>
        </td>
    )
}

function SchedulerHeader( {} ) {
    const dateObj = new Date();
    const days_of_week = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];

    const date = {
        year: dateObj.getFullYear(),
        month: dateObj.getMonth(),
        date: dateObj.getDate(),
        day: dateObj.getDay()
    }

    function getDays() {
        let days = [];
        let idx = date.day;
        for (let i = 0; i < 7; i++) {
            days.push(days_of_week[idx % 7]);
            idx++;
        }
        return days
    }

    function getDates() {
        let dates = [];
        const dateObj = new Date();
        for(let i = 0; i < 7; i++) {
            dateObj.setDate(dateObj.getDate() + 1);
            dates.push(dateObj.getDate());
        }
        return dates;
    }

    const days = getDays();
    const dates = getDates();

    // const dates = getDate(dateObj);
    // const printHeaderComponent = days.map(
    //     (day, idx) => (<HeaderComponent key={idx} date={dates[idx]} day={day}/>)
    // )
    
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