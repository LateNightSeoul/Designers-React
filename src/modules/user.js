const LOGIN_SUCCESS = 'user/LOGIN_SUCCESS';
const LOGOUT_SUCCESS = 'user/LOGOUT_SUCCESS';


export const onLoginSuccess = (datas) => ({
    type: LOGIN_SUCCESS,
    userInfo : {
        logged: true,
        userId: datas.userId,
        role: datas.role,
        token: datas.token
    }
})

export const onLogoutSuccess = () => ({
    type: LOGOUT_SUCCESS,
    userInfo: {
        logged: false,
        userId: '',
        role: '',
        token : ''
    }
})


const initialState = {
    logged: false,
    userId: '',
    role: '',
    token: ''
}

export default function user(state = initialState, action) {
    switch(action.type) {
        case LOGIN_SUCCESS:
            return {state: action.userInfo};
        case LOGOUT_SUCCESS:
            return {state: action.userInfo};
        default:
            return state;
    }
}