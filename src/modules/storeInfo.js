const ADD_STORETIME = 'storeInfo/ADD_STORETIME';

export const addStoreTime = (open_hour, close_hour) => ({
    type: ADD_STORETIME,
    storeTime: {
        open_hour,
        close_hour
    }
});

const initialState = [
    {
        open_hour: 10,
        close_hour: 22
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