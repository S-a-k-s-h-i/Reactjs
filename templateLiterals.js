const str1='one inside "another"';
console.log(str1);
const str2="one inside 'another'";
console.log(str2);
const str3='one inside \'another\'';
console.log(str3);
const str4="one inside \"another\"";
console.log(str4);
const str5=`string with single 'quote' in it`;
console.log(str5);
const str6=`string with double "quote" in it`;
console.log(str6);

const msg=`I am sakshi pokhria.
I lives in roorkee,`
console.log(msg);
const msg1='Uttarakhand';
console.log(`${msg} ${msg1}`);

function example(str){
    return `hello ${str}!!!`
}
const str7=example('sakshi')
console.log(str7);

function example1(str){
    return `hello ${str}!!!`
}
const str8=example1`sakshi`
console.log(str8);

const name='sakshi';
const greet=true;

function exp3(strings,nameValue){
    let str0=strings[0];
    let str1=strings[1];

    if(greet){
        return `${str0}${nameValue}${str1}`;
    }
}
const result=exp3`Hello ${name}, How are you?`;
console.log(result);



