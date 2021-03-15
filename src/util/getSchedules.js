import React from 'react';
import { useSelector } from 'react-redux';

function getSchedules(hour, minute, scheduler) {
    let schedules = [];
    scheduler.map((schedule, i) => {
      if(hour === parseInt(schedule.start_hour) && minute === (schedule.start_minute + '분')) {
        schedules.push({
          treatment_type: schedule.treatment_type, 
          member_name: schedule.member_name,
          treatment_date: parseInt(schedule.treatment_date)
        });
      }
    })
    return schedules;
}

export default getSchedules;
