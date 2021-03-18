function getScheduleHeight(start_hour, end_hour, start_minute, end_minute) {
    let minute = end_minute - start_minute;
    let hour = end_hour - start_hour;
    if(minute < 0) {
        hour -= 1;
        minute = Math.abs(minute) + hour*60;
        return String(minute * 10 + (minute / 10) * 3) + '%';
    }
    minute = minute + hour*60;
    return String(minute * 10 + (minute / 10) * 3) + '%';
}

export default getScheduleHeight;