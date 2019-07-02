import React from 'react';
// import "../assets/component_one.less";
// import css from "../assets/component_one.less";
// import css from '../assets/component_one_css.css';
import "../assets/component_one_css.css";
import _ from "lodash";
import one from "../assets/images/1.jpg";
import two from "../assets/images/2.jpg";
import three from "../assets/images/3.jpg";
import four from "../assets/images/4.jpg";
import five from "../assets/images/5.jpg";
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
                this is component one,
                <div><img src={one} alt=""/></div>
                <div><img src={two} alt=""/></div>
                <div><img src={three} alt=""/></div>
                <div><img src={four} alt=""/></div>
                <div><img src={five} alt=""/></div>
            </div>
    )
};
{/*<div className={css["component-one"]}>*/}
    {/*this is component one*/}
{/*</div>*/}

export default ComponentOne;
