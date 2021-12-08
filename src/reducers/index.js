import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from '../actions';

const initialState = {
    characters: [],
    isFetching: false,
    error: ''
};


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case(FETCH_START):
            return({
                ...state,
                characters: [],
                isFetching: true,
                error:''
            });

        case(FETCH_SUCCESS):
            return({
                ...state,
                characters: action.payload,
                isFetching: false,
                error:''
            });

        case(FETCH_FAIL):
            return({
                ...state,
                characters: [],
                isFetching: false,
                error: action.payload
            });

        default:
            return state;
    }
};