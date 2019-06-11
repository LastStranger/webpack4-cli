import {DOUBLE} from "../../actions/temp";
import {DECREASE} from "../../actions";

const initialState = {
    number: ''
};

const tempReducer = (state=initialState, action) => {
    switch (action.type) {
        case DOUBLE:
            return {
                ...state,
                number: action.number*2
            };
        case DECREASE:
            return {
                ...state,
                number: action.number-1
            };
        default:
            return state
    }
};

export default tempReducer;