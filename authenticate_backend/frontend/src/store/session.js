import csrfFetch from "./csrf"

const SET_USER = 'session/SET_USER'
const REMOVE_USER = 'session/REMOVE_USER'

export const setUser = user => {
    return {
        type: SET_USER,
        user
    }
}

export const removeUser = userId => {
    return {
        type: REMOVE_USER,
        userId
    }
}

export const login = user => async dispatch => {
    let res = await csrfFetch('/api/session', {
        method: 'POST',
        body: JSON.stringify(user)
    })

    let data = await res.json();

    sessionStorage.setItem('currentUser', JSON.stringify(data.user))
    dispatch(setUser(data.user))
}

const sessionReducer = (state = {}, action) => {
    const newState = { ...state }
    switch (action.type) {
        case SET_USER:
            newState.user = action.user
            return newState
        case REMOVE_USER:
            delete newState[action.userId]
            return newState
        default:
            return state;
    }
}

export default sessionReducer