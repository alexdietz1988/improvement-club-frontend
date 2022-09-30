import { combineReducers } from 'redux'
import challengeReducer from './challengeReducer'
import userReducer from './userReducer'

export default combineReducers({
    user: userReducer,
    challenges: challengeReducer
})