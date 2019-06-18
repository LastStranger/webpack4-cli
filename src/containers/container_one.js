import React, {useEffect, useState} from 'react';
// import {cube, square, a} from "../methods";
// import abc from '../methods';
import abc from '../methods';
const ContainerOne = () => {
    const [item, setItem] = useState(0);
    const [itemTwo, setItemTwo] = useState(1);

    useEffect(() => {
        abc();
        // const result = cube(2);
        // const result2 = square(3);
        // console.log(result2);
        // console.log(result);
    }, []);

    useEffect(() => {
     document.title = 'webpack';
     console.log("useEffect processing")
    }, [itemTwo]);

    const handleItemChange = () => {
        setItem(item + 1);
    };

    const handleItemTwoChange = () => {
        setItemTwo(itemTwo + 1);
    };

    return (
        <div>
            <h1>containerOne</h1>
            the item is {item}, <br/>
            the itemTwo is {itemTwo} <br/>
            <button onClick={handleItemChange}>change the item</button>
            <br/>
            <button onClick={handleItemTwoChange}>change the itemTwo</button>
            <button className='unique'>unique button</button>
        </div>
    );
};

export default ContainerOne;
