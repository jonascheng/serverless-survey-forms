
import * as types from '../constants/ActionTypes';

export default function account(state = {}, action) {
    switch (action.type) {
    case types.RECIEVE_ACCOUNT_SUCCESS:
        return Object.assign({}, state, action.account);
    default:
        return state;
    }
}
