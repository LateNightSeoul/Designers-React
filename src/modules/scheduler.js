const ADD_SCHEDULE = 'scheduler/ADD_SCHEDULE';
const ADD_STORETIME = 'scheduler/ADD_STORETIME';
const DELETE_SCHEDULE = 'scheduler/DELETE_SCHEDULE';

let nextId = 1;
export const addSchedule = (member_name, treatment_type, start_time, end_time) => ({
    type: ADD_SCHEDULE,
    schedule: {
        id: nextId++,
        member_name,
        treatment_type,
        start_time,
        end_time
    }
});

const initialState = [
    {
        id: 1,
        member_name: '이해석',
        treatment_type: '펌',
        start_time: '2021-03-14 13:00',
        end_time: '2021-03-14 14:00',
    }
]

export default function schedule(state = initialState, action) {
    switch(action.type) {
        case ADD_SCHEDULE:
            return state.concat(action.schedule);
        case ADD_STORETIME:
            return state.concat(action.storeTime);
        default:
            return state;
    }
}
