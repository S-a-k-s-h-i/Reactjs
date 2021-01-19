function foo(a,b,c){
    if(c===undefined){
        if(b===undefined){
            if(a===undefined)console.log('zero arguments');
            else console.log('1 argument');
        }else console.log('two argument');
    }else console.log('three argument');
}
foo(3,4);
foo(1);
foo(1,2,3);
