let book1=function(){}
book1.prototype.summary=function(){
    return 'summsry of book1';
}
let book2=function(){}
book2.prototype.summary=function(){
    return 'summary of book2'
}
let b1=new book1;
let b2=new book2;
console.log(b1.summary());
console.log(b2.summary());
b2.multiplicity=b1;
console.log(b1);
console.log(b2);