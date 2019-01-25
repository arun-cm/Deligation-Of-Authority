import { combineReducers } from 'redux';
import userReducer from './user/reducer-users';
import selectedUserReducer from './user/reducer-selected-user';

const allReducers = combineReducers({
    users: userReducer,
    user: selectedUserReducer
})
export default allReducers;

