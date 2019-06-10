export const DOUBLE = 'DOUBLE';


export const makeDouble = (number) => {
    return {
        type: DOUBLE,
        number
    }
};