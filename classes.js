// CLASS DECLARATION
try{
    let p=new Polygon(2,4);
    console.log('Polygon p :',p);
}
catch(e){
    console.log(e.name+' : '+e.message);
}
class Polygon{
    constructor(height,width){
        this.height=height;
        this.width=width;
    }
}
let p=new Polygon(2,4);
console.log('Polygon p :',p);

// CLASS EXPRESSION
// 1.Unnamed Class Expression
let Rectangle=class{
    constructor(length,breadth){
        this.length=length;
        this.breadth=breadth;
    };
}
console.log('Rectangle: ',Rectangle);
let r=new Rectangle(14,8);
console.log('r: ',r);

// Named Class Expression
let Circle=class Circle{
    constructor(r){
        this.r=r
    }
}
console.log('Circle: ',Circle);
let c=new Circle(3);
console.log('c: ',c);