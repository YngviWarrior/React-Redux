import {NUM_MIN_CHANGED, NUM_MAX_CHANGED} from './actionTypes'

//Action Creator
export function alterarNumeroMinimo(newNumber) {
    return {
        type: NUM_MIN_CHANGED,
        payload: newNumber
    }
}

export function alterarNumeroMaximo(newNumber) {
    return {
        type: NUM_MAX_CHANGED,
        payload: newNumber
    }
}