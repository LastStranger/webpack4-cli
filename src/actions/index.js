export const ADD = 'add';
export const INCREASE = 'increase';
export const DECREASE = 'decrease';


export const increase = (number) => {
    return {
        type: INCREASE,
        number
    }
};

export const decrease = (number) => {
    return {
        type: DECREASE,
        number
    }
};

export const addToArr = (number) => {
    return {
        type: ADD,
        number
    }
};