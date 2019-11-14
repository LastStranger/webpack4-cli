import React, { useState } from 'react';

const Index = () => {
    const [name, setName] = useState('Tom');
    return (
        <div>
            my name is {name}
        </div>
    );
};

export default Index;
