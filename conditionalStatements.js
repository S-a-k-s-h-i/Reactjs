// if(){}
const age=12;
if(age>18){
    console.log('you are an adult');
}
if(age<18){
    console.log('you are not an adult');
}

// if(){}else{}
const hours=new Date().getHours();
console.log(hours);
if(hours<12){
    console.log('Good Morning');
}else{
    console.log('Good Afternoon');
}

// if(){}else if(){}else{}
let x=3,y=6;
if(x>y){
    console.log('x is grater than y');
}else if(x==y){
    console.log('x is equal to y');
}else{
    console.log('x is smaller than y');
}