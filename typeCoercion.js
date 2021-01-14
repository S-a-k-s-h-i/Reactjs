// Implicit type coercion
console.log(12/'2')

// Explicit type Coercion
console.log(Number('12'));

// String Coercion
console.log(String(125));
console.log('asd'+12);
console.log(String(null));
console.log(String(undefined));
console.log(String(true));
console.log(String(false));
console.log(String(Symbol('my symb')));
// console.log(''+Symbol('my symb'));

// Boolean Conversion
console.log(Boolean(4));
console.log(Boolean(''));
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(false));

console.log(Boolean({}));
console.log(Boolean([]));
console.log(Boolean(Symbol()));

// Numeric Conversion
console.log(Number('123'));
console.log(Number(+'123'));
console.log(Number(-'123'));
console.log(Number(123!='456'));
console.log(Number(5/null));
console.log(Number(true | 0));
console.log(Number(null));
console.log(Number(undefined));
console.log(Number(true));
console.log(Number(false));
console.log(Number('\n'));
console.log(Number('12s'));

console.log(true+false);
console.log(12/'6')
console.log('number'+13+5);
console.log(13+5+'number');
console.log([1]>null);
console.log('foo'+ +'boo');
console.log(null=='');
console.log('true'==true);
console.log('false'==false);
console.log(!!'false'==!!'true');
console.log([5]=='5');
// console.log(1==null);