class Animal{
    constructor(name){
        this.name=name;
    }
    // speak(){
    //     console.log(this.name,'speaks ');
    // }
}
Animal.prototype.speak=function(){
    console.log(this.name,'speaks ');
}
class Dog extends Animal{
    speak(){
        console.log(this.name,'barks ');
    }
}
let spot=new Dog('spot');
spot.speak();
spot=new Animal('spot');
spot.speak();

// super keyword
class animal{
    constructor(name){
        this.name=name;
    }
    speak(){
        console.log(this.name,'speaks ');
    }
}
class dog extends animal{
    speak(){
        super.speak();
        console.log(this.name,'barks');
    }
}
let pot=new Dog('pot');
pot.speak();