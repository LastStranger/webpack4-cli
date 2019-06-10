import {DOUBLE} from "../../actions/temp";

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
        default:
            return state
    }
};

export default tempReducer;