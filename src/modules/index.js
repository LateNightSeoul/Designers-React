import { combineReducers } from 'redux';
import scheduler from './scheduler';
import storeInfo from './storeInfo';

const rootReducer = combineReducers({
    scheduler,
    storeInfo
});

export default rootReducer;