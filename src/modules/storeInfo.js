const ADD_STORETIME = 'storeInfo/ADD_STORETIME';

export const addStoreTime = (open_time, close_time) => ({
    type: ADD_STORETIME,
    storeTime: {
        open_time,
        close_time
    }
});

const initialState = [
    {
        open_time: '09:00',
        close_time: '22:00'
    }
]

export default function storeInfo(state = initialState, action) {
    switch (action) {
        case ADD_STORETIME:
            return state.concat(action.storeTime);
        default:
            return state;
    }
}