import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {addToArr, decrease, increase} from "../actions";
import axios from 'axios';

const ComponentOne = (props) => {
    console.log(props);
    const [num, setNum] = useState(0);

    useEffect(() => {
        console.log("first get in this component");
        console.log(props);
    }, []);

    useEffect(() => {
        if(num !== 0){
            console.log("num is changed");
        }
    }, [num]);

    useEffect(() => {
        console.log("first time and every time component changed");
        console.log(props);
    });

    const requestSomething = () => {
        axios.get('https://fortnite-public-api.theapinetwork.com/prod09/item/get?ids=61ea3e9-8438e42-f53d351-e53a5ce')
            .then(result => {
            console.log(result.status);
            props.increase(result.status);
        })
    };

    return (
        <div>
            this is component one
            <div>this is {props.state.count}</div>
            {
                props.state.arr.map((each, index) => (
                    <div key={index}>this is what inside the arr is:{each}</div>
                ))
            }
            <div>the num is: {num}</div>
            <input type="text"/>
            <div contentEditable>what we have lost will never be return to us</div>
            <button onClick={() => props.increase(1)}>increaseOne</button>
            <button onClick={() => props.decrease(2)}>decreaseTwo</button>
            <button onClick={() => props.addToArr("balala")}>add</button>
            <button onClick={() => setNum(num+1)}>num change button</button>
            <button onClick={requestSomething}>async button</button>
        </div>
    );
};

const mapStateToProps = (state) =>{
    return {
        state
    }
};

export default connect(mapStateToProps,{increase, decrease, addToArr})(ComponentOne);
