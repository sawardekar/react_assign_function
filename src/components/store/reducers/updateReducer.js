import { userConstants } from '../constants';

export function update(state = {}, action) {
    switch (action.type) {
        case userConstants.UPDATE_SUCCESS:
            // return {
            //     items: action.users
            // };
            return {
                ...state,
                items:  action.users
            };
        case userConstants.UPDATE_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}