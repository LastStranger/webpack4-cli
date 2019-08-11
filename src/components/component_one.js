import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
// import "../assets/component_one.less";
// import css from "../assets/component_one.less";
import css from '../assets/component_one_css.css';
// import "../assets/component_one_css.css";
import _ from "lodash";
import one from "../assets/images/1.jpg";
import two from "../assets/images/2.jpg";
import three from "../assets/images/3.jpg";
import four from "../assets/images/4.jpg";
import five from "../assets/images/5.jpg";
// import { add } from 'lodash/fp';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {throttle} from 'lodash';

const ComponentOne = () => {
    // const addOne = add(1);
    // const arr = [1,2,3,4,5];
    // const res = _.map(arr, (each) => {return each * each});
    // console.log(res);
    const lastEl = useRef(null);
    const [arr, setArr] = useState([]);
    // const [one, setOne] = useState(1);
    // return (
    //     <div className={css.component_one_css}>
    //         this is component one
    //     </div>
    // );
    // useLayoutEffect(() => {
    //     AOS.init();
    // }, []);
    useEffect(() => {
        AOS.init();
        window.addEventListener('load', AOS.refresh);
        // return window.removeEventListener('load', AOS.refresh);
    }, []);

    useEffect(() => {
        // window.addEventListener('scroll', addNewEle);
        window.addEventListener('scroll', containEl);
        // window.addEventListener('click', addNewEle);
        AOS.refresh();
        console.log("what we have lost will never be returned to us , this is the real life");
        // window.addEventListener('scroll', addNewEle);
        return () => {
            // window.removeEventListener('scroll', addNewEle)
            window.removeEventListener('scroll', containEl)
            // window.removeEventListener('click', addNewEle)
        }
        // lastEl.current.addEventListener('scroll', function () {
        //     console.log('ddd');
        // })
    }, [arr]);


    const addNewEle = () => {
        console.log('scrolling listening');
        const height = document.querySelector('.last-one').getBoundingClientRect().bottom;
        if(height < 800) {
            console.log('d');
            const tempArr = [two, two, two, two, three ,two ,two, two];
            if(tempArr.length !== arr.length){
                 console.log(tempArr.length);
                console.log(arr.length);
                setArr(tempArr);
            }
        }
    };
    const containEl = throttle(addNewEle, 100);

    console.log("what we have lost will never be returned to us, this is the real life , my friend");
    return (
            <div className={css.component_one_css}>
                this is component one,
                {/*<div data-aos="fade-in"><img src={one} alt=""/></div>*/}
                {/*<div data-aos="zoom-in"><img src={two} alt=""/></div>*/}
                <div data-aos="zoom-in"><img src={three} alt=""/></div>
                <div data-aos="zoom-in"><img src={four} alt=""/></div>
                <div data-aos="zoom-in"><img src={five} alt=""/></div>
                <div data-aos="zoom-in"><img src={three} alt=""/></div>
                <div data-aos="zoom-in"><img src={four} alt=""/></div>
                <div data-aos="zoom-in"><img src={five} alt=""/></div>
                <div data-aos="zoom-in"><img src={three} alt=""/></div>
                <div data-aos="zoom-in"><img src={four} alt=""/></div>
                <div ref={lastEl} className='last-one' data-aos="zoom-in"><img src={five} alt=""/></div>
                {
                    arr.map((each, index) => (
                        <div data-aos="zoom-in" key={index}><img src={each} alt=""/></div>
                    ))
                }
            </div>
    )
};
{/*<div className={css["component-one"]}>*/}
    {/*this is component one*/}
{/*</div>*/}

export default ComponentOne;
