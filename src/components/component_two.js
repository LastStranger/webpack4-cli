import React, {useContext, useEffect, useReducer} from 'react';
import {ConfigContext} from "../index";
import componentTwoReducer from "../reducers/componentTwoReducer";



const ComponentTwo = () => {
    const context = useContext(ConfigContext);
    const [Person, dispatch] = useReducer(componentTwoReducer, {name: 'li', age: 19});

    useEffect(() => {
        dispatch({
            type: 'add',
            data: 100
        })
    }, []);
    return (
        <div>
            componentTwo
            <div>{context.something}</div>
            <div>{Person.name}</div>
            <div>{Person.age}</div>
        </div>
    );
};

export default ComponentTwo;
