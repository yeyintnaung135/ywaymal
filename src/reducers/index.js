import {combineReducers} from 'redux';
import VotesReducer from './reducer-votes';

const allreducers=combineReducers({
    VotesReducer:VotesReducer
});

export default allreducers;