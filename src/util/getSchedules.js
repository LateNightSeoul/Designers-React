function getSchedules(hour, minute, scheduler) {
    let schedules = [];
    scheduler.map((schedule, i) => {
      if(hour === parseInt(schedule.start_hour) && minute === (schedule.start_minute + '분')) {
        schedules.push({
          treatment_type: schedule.treatment_type, 
          member_name: schedule.member_name,
          treatment_date: parseInt(schedule.treatment_date),
          start_hour: schedule.start_hour,
          end_hour: schedule.end_hour,
          start_minute: schedule.start_minute,
          end_minute: schedule.end_minute
        });
      }
    })
    return schedules;
}

export default getSchedules;
