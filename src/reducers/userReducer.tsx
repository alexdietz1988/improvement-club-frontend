import { LOGIN, LOGOUT } from '../actions/types'

const defaultState = {
    isSignedIn: false,
    user: '',
    userId: 0,
    error: ''
}

function userReducer(state = defaultState, action) {
    switch(action.type) {
        case LOGIN:
            if (action.payload.error) {
                return {
                    ...state,
                    error: action.payload.error}
            } else return {
                isSignedIn: true,
                user: action.payload.user,
                userId: action.payload.userId,
                error: ''
            }
        case LOGOUT:
            return defaultState
    }
    return state
}

export default userReducer