'use strict';
const makeArray=(...values)=>{return values};
console.log('Array: ',makeArray(1,2,3,4));
console.log('Array: ',makeArray(1,2,3,4,5,6,7,8,9));

const getSum=(a,b)=>{return a+b};
console.log('1+2=',getSum(1,2));

const greeting='Hello World!';
const capitalize=(str)=>{return str.toUpperCase()};
console.log(greeting+'=>'+capitalize(greeting))

// Sum of array
const arr=[1,2,3,4,5]
const sum=arr.reduce((a,b)=>a+b,0);
console.log('Array: ',arr);
console.log('Sum: ',sum);

// length of string in an array
const strArr=['first','second','third','fourth','fifth'];
const len=strArr.map((s)=>s.length);
console.log('Array: ',strArr);
console.log('Lengths: ',len);

// Array elements greater than a value
const greaterthan3=arr.filter((a)=>a>3);
console.log(greaterthan3);