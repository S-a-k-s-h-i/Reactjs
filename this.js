const obj={
    f1(){
        console.log(this==global);
    },
    f2(){
        function f4(){
            console.log(this);
        }
        return f4()
    }
}
function f5(){
    console.log(this);
}
console.log(this==globalThis);
const test1=obj.f1
test1();