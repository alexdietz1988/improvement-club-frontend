import { FETCH_CHALLENGES } from './types'
import { backend } from '../apis'

export const fetchChallenges = () => async (dispatch, getState) => {
    const userId = getState().user.userId
    const response = await backend.get('/challenges', userId)
    if (response.data.success) {
        dispatch({type: FETCH_CHALLENGES, payload: response.data.data})
    }
}