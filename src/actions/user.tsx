import { LOGIN, LOGOUT } from './types'
import { backend } from '../apis'

export const login = formData => async dispatch => {
    const response = await backend.post('user/', formData)
    let payload = {}
    if (response.data.success) {
        payload.user = formData.user
        payload.userId = response.data.userId
    } else {
        payload.error = response.data.error
    }
    dispatch({ type: LOGIN, payload})
}

export const logout = () => {
    return { type: LOGOUT }
}