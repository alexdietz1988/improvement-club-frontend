import { FETCH_CHALLENGES } from '../actions/types'

function challengeReducer(state = {}, action) {
    switch(action.type) {
        case FETCH_CHALLENGES:
            return action.payload
    }
    return state
} 

export default challengeReducer