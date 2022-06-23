import {NUM_MAX_CHANGED, NUM_MIN_CHANGED} from '../actions/actionTypes.js'

const initialState = {
    min: 1,
    max: 10
}

export default function(state = initialState, action) {
    switch (action.type ) {
        case NUM_MIN_CHANGED:
            return {
                ...state,
                min: action.payload
            }
        case NUM_MAX_CHANGED:
            return {
                ...state,
                max: action.payload
            }
        default:
            return state
    }
}