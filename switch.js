let a=3;
switch(a){
    case 1:
        a='one';
        break;
    case 2:
        a='two';
        break;
    case 3:
        a='three';
        break;
    default:
        a='not found'
        break;        
}
console.log(`value is ${a}`);

a=2;
switch(a){
    case 1:
        a='one';
        break;
    case '2':
            a=2;
            break;
    case 2:
        a='two';
        break;
    case 3:
        a='three';
        break;
    default:
        a='not found'
        break;        
}
console.log(`value is ${a}`);

let result;
const day=new Date().getDay();
switch(day){
    
    case 1:
        today='Monday';
        break;
    case 2:
        today='Tuesday';
        break;
    case 3:
        today='Wednesday';
        break;
    case 4:
        today='Thursday';
        break;
    case 5:
        today='Friday';
        break;
    case 6:
        today='Saturday';
        break;
    default:
        today='Sunday';

}
console.log(`Today is ${today}`);

let fruit='mango';
switch(fruit){
    case 'apple':
    case 'mango':
    case 'pineapple':
    case 'banana':
        console.log(`${fruit} is a fruit`);
        break;
    default:
        console.log(`${fruit} is not a fruit`);

}