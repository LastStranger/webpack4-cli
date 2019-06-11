import {ADD, DECREASE, GETINFO, INCREASE} from "../actions";


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
            console.log("this the ")
            return{
                ...state,
                count: state.count - action.number
            };
        case ADD:
            return{
                ...state,
                arr: [...state.arr, action.number]
            };
        case GETINFO:
            return {
                ...state,
                count: state.count + action.number
            };
        default:
            return state;
    }
};
export default rootReducer;