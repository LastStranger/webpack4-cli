import React, { Component } from 'react';
import css from  './index.less';

class ClassDemo extends Component {

    componentDidMount() {
        document.getElementsByClassName(css.box)[0].style.transform = 'translateY(100px)';
    }

    render() {
        return (
            <div className={css.box}>

            </div>
        );
    }
}

export default ClassDemo;
