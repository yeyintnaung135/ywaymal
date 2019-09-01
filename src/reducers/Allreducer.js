import {combineReducers} from 'redux';
import socialauth from './reducer-socialauth';

//to combine all reducer into one

const allReducers = combineReducers({
    //for facebook data
    socialauth
})
export default allReducers