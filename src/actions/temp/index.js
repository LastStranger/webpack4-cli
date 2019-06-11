import {DECREASE} from "../index";

export const DOUBLE = 'DOUBLE';


export const makeDouble = (number) => {
    return {
        type: DOUBLE,
        number
    }
};

export const decreaseTemp = (number) => {
    return {
        type: DECREASE,
        number
    }
};