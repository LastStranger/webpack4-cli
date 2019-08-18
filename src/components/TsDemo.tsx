import * as React from 'react';

const TsDemo = () => {
    const el = document.getElementsByClassName('tsDemo');
    console.log('dd');
    const arr: Array<number|string> = [123];
    arr.push('1');
    const arr2 = ["li"];
    // arr2.push(1);
    console.log(arr);
    for(const each of arr){
        console.log(each)
    }

    const dd = (name: string, age: number):number => {
        console.log('dd');
        return 1;
    };
    dd("li", 1);
    return (
        <div className='tsDemo'>
            this is a tsDemo
        </div>
    );
};

export default TsDemo;
