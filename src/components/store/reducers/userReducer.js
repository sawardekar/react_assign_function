import { userConstants } from '../constants';

export function users(state = {}, action) {
    switch (action.type) {
        case userConstants.GETALL_SUCCESS:
            return {
                items: action.users
            };
        case userConstants.GETALL_FAILURE:
            return {
                error: action.error
            };
        case userConstants.DELETE_SUCCESS:
            console.log("DELETE SUCCESS",action);
            return {
                ...state,
                items:  {'data' : state.items.data.filter(user => user.id !== action.id) }
            };
        case userConstants.DELETE_FAILURE:
            return {};
        default:
            return state
    }
}