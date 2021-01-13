// STRINGS
firstname='sakshi'
city="roorkee"
intro=`${firstname} from ${city}`
console.log(intro)

// NUMBERS
const n1=2;
const n2=3.5;
const n3=4e5;
console.log(n1/0);
console.log(-n2/0);
console.log(city/4);

// BigInt
const v1=1234567890987n;
console.log(v1+1n);
// console.log(v1+1);

// Boolean
const b1=true;
const b2=false;
console.log(`${b1} and ${b2}`);

// undefined
let name;
console.log(name);

// null
const number=null;
console.log(number);

// Symbol
value1=Symbol('hello');
value2=Symbol('hello');
console.log(value1==value2);

const student={
    firstname:'awes',
    lastname:'fgh',
    class:4
}

// typeof
console.log(student.class);
console.log(typeof(student));
console.log(typeof(value1));
console.log(typeof(v1));