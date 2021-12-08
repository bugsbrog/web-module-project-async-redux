import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from '../actions';

const initialState = {
    car: {
        Make_ID: "",
        Make_Name: ""
    },
    isFetching: false,
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case(FETCH_START):
            return({
                ...state,
                car: {},
                isFetching: true,
                error:''
            });

        case(FETCH_SUCCESS):
            return({
                ...state,
                car: action.payload,
                isFetching: false,
                error:''
            });

        case(FETCH_FAIL):
            return({
                ...state,
                car: {},
                isFetching: false,
                error: action.payload
            });

        default:
            return state;
    }
};