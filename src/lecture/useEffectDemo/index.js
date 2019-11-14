import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import css from './index.less';

const UseEffectDemo = () => {
    const RelEl = useRef();
    const [name, setName] = useState();


    useEffect(() => {
        document.title='页面二';
        RelEl.current.style.backgroundColor = 'red';
        RelEl.current.style.transform = 'translateY(100px)';
        //...
        // document.getElementsByClassName(css.box)[0].style.backgroundColor =
        //     'red';
        // document.getElementsByClassName(
        //     css.box
        // )[0].style.transform = `translateY(100px)`;
    }, []);

    return (
        <>
            <div className={css.box} ref={RelEl} />
            {/*<div className={css.boxTwo} ref={RelBoxTwo}/>*/}
        </>
    );
};

export default UseEffectDemo;
