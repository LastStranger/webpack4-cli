import React from 'react';
import ComponentInside from "./component_four";

const ComponentOne = () => {
    return (
        <div>
            this is component one
            <ComponentInside/>
        </div>
    );
};

export default ComponentOne;
