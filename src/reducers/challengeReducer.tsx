import { FETCH_CHALLENGES } from '../actions/types'

interface challengeAction {
    type: string,
    payload: []
}

function challengeReducer(state = {}, action: challengeAction) {
    switch(action.type) {
        case FETCH_CHALLENGES:
            return action.payload
    }
    return state
} 

export default challengeReducer