import React, {useEffect, useState} from 'react';
import {Link} from "@reach/router";
// import ComponentInside from "./component_four";

const ComponentOne = () => {
    const [num, setNum] = useState(0);
    useEffect(() => {
        console.log("hello first");
        return(() => {
            console.log('bye first');
        })
    });
    useEffect(() => {
        console.log('添加监听');
       window.addEventListener('click', eventListen);
       document.getElementsByClassName('unique')[0].addEventListener('click', uniqueListen);
       return (() => {
           console.log('清除监听');
           window.removeEventListener('click', eventListen);
           document.getElementsByClassName('unique')[0].removeEventListener('click', uniqueListen)
       })
    }, [num]);

    useEffect(() => {
       console.log("hello");
       return(() => {
           console.log('bye');
       })
    });
    const eventListen = () => {
        console.log('click')
    };
    const uniqueListen = () => {
        console.log('unique clicked');
    }
    return (
        <div className="unique">
            this is component one
            <Link to='/two'>dddd</Link>
            <button onClick={() => setNum(pre => pre+1)}>click to change the number</button>
            {/*<ComponentInside/>*/}
            <div>{num}</div>
        </div>
    );
};

export default ComponentOne;
