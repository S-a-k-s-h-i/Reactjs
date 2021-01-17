class Rectangle{
    constructor(length,width){
        this.length=length;
        this.width=width;
    }
    getArea(){
        return this.length*this.width;
    }
}
let rect1=new Rectangle(12,9);
console.log(rect1.getArea());