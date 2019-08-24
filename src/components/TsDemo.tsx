import * as React from 'react';

const TsDemo = () => {
    const el = document.getElementsByClassName('tsDemo');
    console.log('dd');
    const arr: Array<number|string> = [123];
    interface  One{
        name: string,
        age: number
    }
    function sss (arg: One): One{
        return {
            name: '1'+arg.name,
            age: 12
        }
    }
    sss({name: 'dd', age:1});
    arr.push('1');
    let nam = 1;

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
    const studen = 1;
    return (
        <div className='tsDemo'>
            this is a tsDemo
            <div>
                this is a div
                <div>
                    
                </div>
                <span>
                    this is
                    {/* <ComponentOne></ComponentOne> */}
                </span>
            </div>
        </div>
    );
};

export default TsDemo;
