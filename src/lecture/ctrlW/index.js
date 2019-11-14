import React, { useEffect, useLayoutEffect } from 'react';
import { Link } from '@reach/router';

const CtrlW = () => {

    useLayoutEffect(() => {
        document.title = '页面一'
    }, []);

    return (
        <div>
            <div>what we have lost will never be returned to us.</div>
            <Link to='/useEffect-demo'>hhwq</Link>
        </div>
    );
};

export default CtrlW;
