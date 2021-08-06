import { userConstants } from '../constants';
// import { history } from '../_helpers';
import axios from 'axios';

function register(user) {
    return dispatch => {
        axios.post('https://jsonplaceholder.typicode.com/users', JSON.stringify(user))
            .then(
                user => {
                    dispatch(success());
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

const updateUser = (user) => {
    return dispatch => {
        axios.put(`https://jsonplaceholder.typicode.com/users/${user.id}`, JSON.stringify(user))
            .then(
                user => {
                    dispatch(success());
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function success(user) { return { type: userConstants.UPDATE_SUCCESS, user } }
    function failure(error) { return { type: userConstants.UPDATE_FAILURE, error } }
}

function getAll() {
    return dispatch => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error.toString()))
            );
    };

    function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}

const getDetail = (id) => {
    return dispatch => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(
                user => dispatch(success(id)),
                error => dispatch(failure(id, error.toString()))
            );
    };

    function success(id) { return { type: userConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: userConstants.DELETE_FAILURE, id, error } }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return dispatch => {
        axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(
                user => dispatch(success(id)),
                error => dispatch(failure(id, error.toString()))
            );
    };

    function success(id) { return { type: userConstants.DELETE_SUCCESS, id } }
    // function success(users) { return { type: userConstants.DELETE_SUCCESS, users } }
    function failure(id, error) { return { type: userConstants.DELETE_FAILURE, id, error } }
}

export const userActions = {
    register,
    getAll,
    getDetail,
    updateUser,
    delete: _delete
};
