import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import {connect} from 'react-redux';
import {addToArr, decrease, getInfo, increase} from "../actions";
import axios from 'axios';
import ComponentThree from "./component_three";

let abc = 1;
console.log("abc is up to me");
let edg = 2;
const ComponentOne = (props) => {
    console.log(props);
    console.log("ComponentRender");
    const [num, setNum] = useState(0);
    const [message, setMessage] = useState('nothing');
    const [temp, setTemp] = useState(1);
    const a = useRef('');
    useEffect(() => {
        console.log("a is changing");
    }, [num])

    // useEffect(() => {
    //     console.log("first render");
    //     return () => {
    //         console.log("I'm leaving");
    //     }
    // }, [num]);

    const showABC = () => {
        console.log(abc);
        return abc++;
    };

    useEffect(() => {
        console.log("abc is changed")
    }, [abc]);
    // useLayoutEffect(() => {
    //     console.log(a);
    //     document.title=a.current.value;
    // });
    // useEffect(() => {
    //     console.log("first get in this component");
    //     console.log(props);
    // }, []);
    //
    // useEffect(() => {
    //     if(num !== 0){
    //         console.log("num is changed");
    //     }
    // }, [num]);

    // useEffect(() => {
    //     console.log("first time and every time component changed");
    //     console.log(props);
    // });

    const requestSomething = () => {
        axios.get('https://fortnite-public-api.theapinetwork.com/prod09/item/get?ids=61ea3e9-8438e42-f53d351-e53a5ce')
            .then(result => {
            console.log(result.status);
            props.increase(result.status);
        })
    };

    // useEffect(() => {
    //     axios.get('https://fortnite-public-api.theapinetwork.com/prod09/item/get?ids=61ea3e9-8438e42-f53d351-e53a5ce')
    //         .then(result => {
    //             setNum(1);
    //         })
    //     // fetch('https://fortnite-public-api.theapinetwork.com/prod09/item/get?ids=61ea3e9-8438e42-f53d351-e53a5ce')
    //     //     .then(response => response.json())
    //     //     .then(json => {
    //     //         setNum(1);
    //     //     });
    // },[]);

    // useEffect( () => {
    //    const dd = async () => {
    //        axios.get('https://fortnite-public-api.theapinetwork.com/prod09/item/get?ids=61ea3e9-8438e42-f53d351-e53a5ce')
    //            .then(result => {
    //                setNum(1);
    //            })
    //    };
    //     dd();
    // },[]);

    return (
        <div>
            this is component one
            <ComponentThree message={message} edg={edg}/>
            <button onClick={() => setMessage("something")}>click to change the message</button>
            <button onClick={() => setNum(1)}>click to change the message</button>
            <button onClick={() => setTemp(1)}>click to change the temp</button>
            {/*<button onClick={() => {edg++}}>click to change the edg to a new number</button>*/}
            {/*<div>this is {props.state.count}</div>*/}
            {/*{*/}
                {/*props.state.arr.map((each, index) => (*/}
                    {/*<div key={index}>this is what inside the arr is:{each}</div>*/}
                {/*))*/}
            {/*}*/}
            {/*<div>the num is: {num}</div>*/}
            {/*<input type="text"/>*/}
            {/*/!*<div contentEditable>what we have lost will never be return to us</div>*!/*/}
            {/*<button onClick={() => props.increase(1)}>increaseOne</button>*/}
            {/*<button onClick={() => props.decrease(2)}>decreaseTwo</button>*/}
            {/*<button onClick={() => props.addToArr("balala")}>add</button>*/}
            {/*<button onClick={() => setNum(num+1)}>num change button</button>*/}
            {/*<button onClick={requestSomething}>async button</button>*/}
            {/*<button onClick={props.getInfo}>async button</button>*/}
            {/*<input ref={a} type="text" value={num} onChange={(e) =>setNum(e.target.value)}/>*/}
            {/*<button onClick={showABC}>click</button>*/}
        </div>
    );
};

const mapStateToProps = (state) =>{
    return {
        state
    }
};

export default connect(mapStateToProps,{increase, decrease, addToArr, getInfo})(ComponentOne);
