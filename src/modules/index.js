import { combineReducers } from 'redux';
import scheduler from './scheduler';
import storeInfo from './storeInfo';
import date from './date';

const rootReducer = combineReducers({
    scheduler,
    storeInfo,
    date
});

export default rootReducer;