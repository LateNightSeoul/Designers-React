const ADD_SCHEDULE = 'scheduler/ADD_SCHEDULE';
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

export const deleteSchedule = (id) => ({
    type: DELETE_SCHEDULE,
    id
});

const initialState = [
    {
        id: 1,
        member_name: '이해석',
        treatment_type: 'perm',
        start_hour: '14',
        end_hour: '16',
        start_minute: '00',
        end_minute: '00',
        treatment_date: 30
    }, {
        id: 2,
        member_name: '최준혁',
        treatment_type: 'cut',
        start_hour: '16',
        end_hour: '17',
        start_minute: '00',
        end_minute: '00',
        treatment_date: 31
    }, {
        id: 3,
        member_name: '이종영',
        treatment_type: 'perm',
        start_hour: '14',
        end_hour: '15',
        start_minute: '00',
        end_minute: '00',
        treatment_date: 1
    }, {
        id: 4,
        member_name: '이동민',
        treatment_type: 'perm',
        start_hour: '14',
        end_hour: '16',
        start_minute: '30',
        end_minute: '30',
        treatment_date: 2
    }
]

export default function schedule(state = initialState, action) {
    switch(action.type) {
        case ADD_SCHEDULE:
            return state.concat(action.schedule);
        case DELETE_SCHEDULE:
            return state.filter(schedule => schedule.id !== action.id);
        default:
            return state;
    }
}
