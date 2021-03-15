import { useSelector } from 'react-redux';
import Schedule from '../js/Component/schedule';

const GET_SCHEDULE = 'scheduler/GET_SCHEDULE';
const SHIFT_SCHEDULE = 'scheduler/SHIFT_SCHEDULE';

export const getSchedule = (hour, minute) => {
    const schedules = GetSchedules(hour, minute);
    return {
        type: GET_SCHEDULE,
        schedules
    }
}

function GetSchedules(hour, minute) {
    let schedules = [];
    const scheduler = useSelector(state => state.scheduler);
    scheduler.map((schedule) => {
      if(hour === parseInt(schedule.start_hour) && minute === (schedule.start_minute + '분')) {
        schedules.push({
            id: schedule.id,
            treatment_type: schedule.treatment_type, 
            member_name: schedule.member_name,
            treatment_date: parseInt(schedule.treatment_date)
        });
      }
    })
    return schedules;
  }

export const shiftSchedule = () => {
    const id = this.state.schedule[0].id;
    return {
        type: GET_SCHEDULE,
        id
    }
}

const initialState = [];

export default function loadingSchedule(state = initialState, action) {
    switch(action.type) {
        case GET_SCHEDULE:
            return state.concat(action.schedules);
        case SHIFT_SCHEDULE:
            return state.filter(schedule => schedule.id !== action.id)
        default:
            return state;
    }
}