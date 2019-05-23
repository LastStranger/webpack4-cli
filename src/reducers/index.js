import {ADD, DECREASE, INCREASE} from "../actions";


const initialState = {
    arr: [],
    count: 0
};

const rootReducer = (state=initialState, action) => {
    switch (action.type) {
        case INCREASE:
            return {
                ...state,
                count: state.count + action.number
            };
        case DECREASE:
            return{
                ...state,
                count: state.count - action.number
            };
        case ADD:
            return{
                ...state,
                arr: [...state.arr, action.number]
            };
        default:
            return state;
    }
};
export default rootReducer;