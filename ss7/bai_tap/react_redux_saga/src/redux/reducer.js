import { SET_USERS, USER_DELETED } from './action';

const initialState = {
    users: []
};

const rootReducer = (state = initialState, action) => {
    const  {type, payload} = action;
    switch (type) {
        case SET_USERS:
            return {
                ...state,
                users: payload
            };
        case USER_DELETED:
            return {
                ...state,
                users: state.users.filter(user => user.id !== payload)
            };
        default:
            return state;
    }
};

export default rootReducer;
