import React, {useEffect} from 'react';

const ComponentThree = ({message, edg}) => {

    useEffect(() => {
        console.log("this is message " + message);
    }, [message]);

    useEffect(() => {
        console.log("this is edg's num" + edg);
    }, [edg]);
    return (
        <div>
            this is component three
        </div>
    );
};

export default ComponentThree;
