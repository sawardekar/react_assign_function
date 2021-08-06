import { combineReducers } from 'redux';
import { registration } from './registrationReducer';
import { users } from './userReducer';
import { update } from './updateReducer';

const rootReducer = combineReducers({
    registration,
    users,
    update
});

export default rootReducer;