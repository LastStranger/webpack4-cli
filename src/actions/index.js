import axios from "axios";

export const ADD = 'add';
export const INCREASE = 'increase';
export const DECREASE = 'decrease';
export const GETINFO = 'GETINFO';

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

export const getInfo = () => {
    console.log("one");
    return dispatch => {
        console.log("two");
       return axios.get('https://fortnite-public-api.theapinetwork.com/prod09/item/get?ids=61ea3e9-8438e42-f53d351-e53a5ce')
            .then(result => dispatch(increaseForThunk(result.status)))
    }
};

const increaseForThunk = (number) => {
    return {
        type: GETINFO,
        number
    }
};