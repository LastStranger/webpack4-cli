import React, {useEffect, useState} from 'react';

const ContainerOne = () => {
    const [item, setItem] = useState(0);
    const [itemTwo, setItemTwo] = useState(1);

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
        </div>
    );
};

export default ContainerOne;
