import React, { useEffect, useState } from 'react';

let person1 = {
    name: 'li',
    age: 23,
};
let person2 = {
    name: 'zhen',
    age: 21,
};
// const map = new Map();
// map.set(person1, 'this is the person1 message ');
// map.set(person2, 'this is the person2 message');
// console.log(map.get(person1));
// const weakMap = new Map();
// weakMap.set(person1, 'this is weakMap message1');
// weakMap.set(person2, 'this is weakMap message2');
// console.log(weakMap.get(person1));
// person1 = null;
// person2 = null;
// console.log(weakMap);
const ComponentServen = () => {
    console.log('render');
    const [form, setForm] = useState({
        name: '',
        password: '',
        email: '',
    });
    const [user, setUser] = useState(null);
    const [a, setA] = useState(a);
    const [b, setB] = useState(b);
    const [c, setC] = useState(c);
    const [data, setData] = useState({
        d: 1,
        e: 2,
        f: 3,
    });
    useEffect(() => {
        setA(1);
        setB(2);
        setC(3);
    });

    // useEffect(() => {
    //     let person1 = {
    //         name: 'li',
    //         age: 23,
    //     };
    //     const person2 = {
    //         name: 'zhen',
    //         age: 21,
    //     };
    //     // const map = new Map();
    //     // map.set(person1, 'this is the person1 message ');
    //     // map.set(person2, 'this is the person2 message');
    //     // console.log(map.get(person1));
    //     const weakMap = new WeakMap();
    //     weakMap.set(person1, 'this is weakMap message1');
    //     weakMap.set(person2, 'this is weakMap message2');
    //     console.log(weakMap);
    //     // person1 = null;
    //     console.log(weakMap);
    //     // console.log(weakMap.get(person1));
    //     // person1 = null;
    //     // console.log(weakMap.get(person1), 'weak reference');
    // }, []);

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = e => {
        e.preventDefault();
        console.log(form, 'form');
        setUser(form);
    };
    return (
        <div>
            <div>{a}</div>
            <div>{b}</div>
            <div>{c}</div>
            <form>
                <input type="text" name="name" onChange={handleChange} />
                <input type="text" name="password" onChange={handleChange} />
                <input type="text" name="email" onChange={handleChange} />
                <button onClick={handleSubmit}>submit</button>
            </form>
            <pre>{user && JSON.stringify(form, null, 4)}</pre>
        </div>
    );
};

export default ComponentServen;
