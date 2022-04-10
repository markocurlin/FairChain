import * as ActionTypes from '../constants/actionTypes';

export const Blockchain = (state = {
        isLoading: true,
        errMess: null,
        blockchain: []
    }, action) => {
    switch(action.type) {

        case ActionTypes.LOAD_BLOCKCHAIN:
            return {...state, isLoading: false, errMess: null, blockchain: action.payload}

        case ActionTypes.START_LOADING_BLOCKCHAIN:
            return {...state, isLoading: true, errMess: null, blockchain: []}

        case ActionTypes.BLOCKCHAIN_FAILED:
            return {...state, isLoading: false, errMess: action.payload, blockchain: []}

        default: 
            return state;
    }
}