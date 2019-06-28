import React from 'react';
// import "../assets/component_one.less";
// import css from "../assets/component_one.less";
// import css from '../assets/component_one_css.css';
import "../assets/component_one_css.css";
import _ from "lodash";
// import { add } from 'lodash/fp';
const ComponentOne = () => {
    // const addOne = add(1);
    const arr = [1,2,3,4,5];
    const res = _.map(arr, (each) => {return each * each});
    console.log(res);
    // return (
    //     <div className={css.component_one_css}>
    //         this is component one
    //     </div>
    // );
    return (
            <div className="component_one_css">
                this is component one add new test,test two,test three
            </div>
    )
};
{/*<div className={css["component-one"]}>*/}
    {/*this is component one*/}
{/*</div>*/}

export default ComponentOne;
