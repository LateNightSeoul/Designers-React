import { combineReducers } from 'redux';
import scheduler from './scheduler';
import storeInfo from './storeInfo';
import date from './date';
import loadingSchedule from './loadingSchedule';

const rootReducer = combineReducers({
    scheduler,
    storeInfo,
    date,
    loadingSchedule
});

export default rootReducer;