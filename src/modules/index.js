import { combineReducers } from 'redux';
import scheduler from './scheduler';
import storeInfo from './storeInfo';
import date from './date';
import user from './user';

const rootReducer = combineReducers({
    scheduler,
    storeInfo,
    date,
    user
});

export default rootReducer;