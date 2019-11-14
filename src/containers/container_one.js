import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react';


function User({ userId }) {
    const [user, setUser] = useState({ name: '', email: '' });
    const [age, setAge] = useState('0');


    const fetchUser = useCallback(async () => {
        console.log('ddd');
        setTimeout(() => {
            const newUser = {
                name: 'l',
                email: '2121',
            };
            setUser(newUser)
            // setAge('1')
        }, 1000)
    }, [userId]);
    // const fetchUser = async () => {
    //     console.log('ddd');
    //     setTimeout(() => {
    //         const newUser = {
    //             name: 'l',
    //             email: '2121',
    //         };
    //         setUser(newUser)
    //         // setAge('1')
    //     }, 1000)
    // };

    useLayoutEffect(() => {
        fetchUser();
    }, [fetchUser]);

    // useLayoutEffect(() => {
    //     fetchUser();
    // }, [fetchUser]);

    console.log(
        'what we have lost will'
    );
    return (
        <div>
            <div>{age}</div>
            <div>{user.name}</div>
            <div>{user.email}</div>
        </div>
    );
}

export default User;
