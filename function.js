'use strict';
function greet(name){
    console.log(`hello ${name} :)`);

}
const about=(name)=>{console.log(`How are you ${name}`)};

greet(process.argv[2]);
about(process.argv[2]);

function addNumber(num1,num2){
    console.log(`${num1} + ${num2} = ${num1+num2}`);
}
addNumber(2,4);
addNumber(7,5);

let x=function(num){return num*num};
console.log(x(4));

function myfunc(){
    console.log(this);
}
myfunc();

function Car(color){
    this.color=color;
}
const redCar=new Car('red');
console.log(redCar instanceof Car);

let fn=(param1,param2)=>param1+param2;
console.log(fn(4,6));

let fn1=()=>{pp1:'test'};
console.log(fn1);
